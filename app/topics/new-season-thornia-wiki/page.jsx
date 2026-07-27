import NewSeasonThorniaWikiKeywordPage, { generateMetadata } from './new-season-thornia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThorniaWikiKeywordPage />;
}
