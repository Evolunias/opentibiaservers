import AureraGlobalExpRateKeywordPage, { generateMetadata } from './aurera-global-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalExpRateKeywordPage />;
}
