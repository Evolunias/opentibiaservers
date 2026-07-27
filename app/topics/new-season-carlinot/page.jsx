import NewSeasonCarlinotKeywordPage, { generateMetadata } from './new-season-carlinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCarlinotKeywordPage />;
}
