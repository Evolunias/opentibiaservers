import FreshStartOlderaServerKeywordPage, { generateMetadata } from './fresh-start-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOlderaServerKeywordPage />;
}
