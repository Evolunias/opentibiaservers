import NewSeasonAmeriaWikiKeywordPage, { generateMetadata } from './new-season-ameria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAmeriaWikiKeywordPage />;
}
