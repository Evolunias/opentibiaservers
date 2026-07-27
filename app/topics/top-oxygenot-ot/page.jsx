import TopOxygenotOtKeywordPage, { generateMetadata } from './top-oxygenot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOxygenotOtKeywordPage />;
}
