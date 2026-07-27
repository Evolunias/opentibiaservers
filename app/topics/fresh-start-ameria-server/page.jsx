import FreshStartAmeriaServerKeywordPage, { generateMetadata } from './fresh-start-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAmeriaServerKeywordPage />;
}
