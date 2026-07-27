import TibiascapeExpRateKeywordPage, { generateMetadata } from './tibiascape-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeExpRateKeywordPage />;
}
