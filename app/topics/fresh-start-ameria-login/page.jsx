import FreshStartAmeriaLoginKeywordPage, { generateMetadata } from './fresh-start-ameria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAmeriaLoginKeywordPage />;
}
