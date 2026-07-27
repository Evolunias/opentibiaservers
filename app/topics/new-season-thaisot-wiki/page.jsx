import NewSeasonThaisotWikiKeywordPage, { generateMetadata } from './new-season-thaisot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThaisotWikiKeywordPage />;
}
