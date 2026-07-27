import TopOlderaOtKeywordPage, { generateMetadata } from './top-oldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOlderaOtKeywordPage />;
}
