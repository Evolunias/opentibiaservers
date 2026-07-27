import RealestaExpRateKeywordPage, { generateMetadata } from './realesta-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaExpRateKeywordPage />;
}
