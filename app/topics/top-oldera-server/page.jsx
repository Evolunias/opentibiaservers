import TopOlderaServerKeywordPage, { generateMetadata } from './top-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOlderaServerKeywordPage />;
}
