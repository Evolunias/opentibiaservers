import MiracleExpRateKeywordPage, { generateMetadata } from './miracle-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleExpRateKeywordPage />;
}
