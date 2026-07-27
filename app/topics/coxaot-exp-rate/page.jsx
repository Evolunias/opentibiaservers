import CoxaotExpRateKeywordPage, { generateMetadata } from './coxaot-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotExpRateKeywordPage />;
}
