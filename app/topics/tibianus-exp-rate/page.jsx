import TibianusExpRateKeywordPage, { generateMetadata } from './tibianus-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusExpRateKeywordPage />;
}
