import EvoluniaExpRateKeywordPage, { generateMetadata } from './evolunia-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaExpRateKeywordPage />;
}
