import FreshStartAmeriaClientKeywordPage, { generateMetadata } from './fresh-start-ameria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAmeriaClientKeywordPage />;
}
