import HighrateAmeriaWikiKeywordPage, { generateMetadata } from './highrate-ameria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAmeriaWikiKeywordPage />;
}
