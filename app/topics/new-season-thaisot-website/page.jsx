import NewSeasonThaisotWebsiteKeywordPage, { generateMetadata } from './new-season-thaisot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThaisotWebsiteKeywordPage />;
}
