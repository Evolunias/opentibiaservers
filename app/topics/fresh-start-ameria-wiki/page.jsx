import FreshStartAmeriaWikiKeywordPage, { generateMetadata } from './fresh-start-ameria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAmeriaWikiKeywordPage />;
}
