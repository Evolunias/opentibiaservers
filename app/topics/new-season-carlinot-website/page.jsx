import NewSeasonCarlinotWebsiteKeywordPage, { generateMetadata } from './new-season-carlinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCarlinotWebsiteKeywordPage />;
}
