import MediviaExpRateKeywordPage, { generateMetadata } from './medivia-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaExpRateKeywordPage />;
}
