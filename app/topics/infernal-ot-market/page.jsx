import InfernalOtMarketKeywordPage, { generateMetadata } from './infernal-ot-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtMarketKeywordPage />;
}
