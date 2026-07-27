import TopOxygenotOtsKeywordPage, { generateMetadata } from './top-oxygenot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOxygenotOtsKeywordPage />;
}
