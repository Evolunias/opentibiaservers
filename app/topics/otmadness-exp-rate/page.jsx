import OtmadnessExpRateKeywordPage, { generateMetadata } from './otmadness-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessExpRateKeywordPage />;
}
