import TibiaraExpRateKeywordPage, { generateMetadata } from './tibiara-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraExpRateKeywordPage />;
}
