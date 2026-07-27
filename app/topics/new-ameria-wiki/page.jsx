import NewAmeriaWikiKeywordPage, { generateMetadata } from './new-ameria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAmeriaWikiKeywordPage />;
}
