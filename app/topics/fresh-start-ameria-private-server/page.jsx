import FreshStartAmeriaPrivateServerKeywordPage, { generateMetadata } from './fresh-start-ameria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAmeriaPrivateServerKeywordPage />;
}
