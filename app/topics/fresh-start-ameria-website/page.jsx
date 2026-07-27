import FreshStartAmeriaWebsiteKeywordPage, { generateMetadata } from './fresh-start-ameria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAmeriaWebsiteKeywordPage />;
}
