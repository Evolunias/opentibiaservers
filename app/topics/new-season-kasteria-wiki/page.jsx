import NewSeasonKasteriaWikiKeywordPage, { generateMetadata } from './new-season-kasteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonKasteriaWikiKeywordPage />;
}
