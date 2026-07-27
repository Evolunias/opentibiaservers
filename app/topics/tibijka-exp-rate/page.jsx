import TibijkaExpRateKeywordPage, { generateMetadata } from './tibijka-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaExpRateKeywordPage />;
}
