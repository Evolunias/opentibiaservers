import NewSeasonCanobWikiKeywordPage, { generateMetadata } from './new-season-canob-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCanobWikiKeywordPage />;
}
