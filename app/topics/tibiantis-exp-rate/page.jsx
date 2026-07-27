import TibiantisExpRateKeywordPage, { generateMetadata } from './tibiantis-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisExpRateKeywordPage />;
}
