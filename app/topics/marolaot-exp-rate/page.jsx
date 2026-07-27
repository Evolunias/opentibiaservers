import MarolaotExpRateKeywordPage, { generateMetadata } from './marolaot-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotExpRateKeywordPage />;
}
