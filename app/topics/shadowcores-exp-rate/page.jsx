import ShadowcoresExpRateKeywordPage, { generateMetadata } from './shadowcores-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresExpRateKeywordPage />;
}
