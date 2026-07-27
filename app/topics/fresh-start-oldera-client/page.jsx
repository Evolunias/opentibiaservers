import FreshStartOlderaClientKeywordPage, { generateMetadata } from './fresh-start-oldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOlderaClientKeywordPage />;
}
