import HarmoniaOtMarketKeywordPage, { generateMetadata } from './harmonia-ot-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtMarketKeywordPage />;
}
