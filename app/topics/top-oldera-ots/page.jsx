import TopOlderaOtsKeywordPage, { generateMetadata } from './top-oldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOlderaOtsKeywordPage />;
}
