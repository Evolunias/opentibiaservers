import NewOlderaClientKeywordPage, { generateMetadata } from './new-oldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOlderaClientKeywordPage />;
}
