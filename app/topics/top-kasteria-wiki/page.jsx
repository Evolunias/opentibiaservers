import TopKasteriaWikiKeywordPage, { generateMetadata } from './top-kasteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopKasteriaWikiKeywordPage />;
}
