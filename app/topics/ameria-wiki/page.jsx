import AmeriaWikiKeywordPage, { generateMetadata } from './ameria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaWikiKeywordPage />;
}
