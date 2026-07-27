import NewSeasonOxygenotWikiKeywordPage, { generateMetadata } from './new-season-oxygenot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOxygenotWikiKeywordPage />;
}
