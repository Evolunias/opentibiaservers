import ThaisotExpRateKeywordPage, { generateMetadata } from './thaisot-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotExpRateKeywordPage />;
}
