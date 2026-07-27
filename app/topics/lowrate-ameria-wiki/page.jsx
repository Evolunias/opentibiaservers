import LowrateAmeriaWikiKeywordPage, { generateMetadata } from './lowrate-ameria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAmeriaWikiKeywordPage />;
}
