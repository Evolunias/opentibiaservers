import HarmoniaOtExpRateKeywordPage, { generateMetadata } from './harmonia-ot-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtExpRateKeywordPage />;
}
