import TopAmeriaWikiKeywordPage, { generateMetadata } from './top-ameria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAmeriaWikiKeywordPage />;
}
