import FreshStartOlderaPrivateServerKeywordPage, { generateMetadata } from './fresh-start-oldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOlderaPrivateServerKeywordPage />;
}
