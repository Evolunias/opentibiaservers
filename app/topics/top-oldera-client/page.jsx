import TopOlderaClientKeywordPage, { generateMetadata } from './top-oldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOlderaClientKeywordPage />;
}
