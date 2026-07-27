import OlderaExpRateKeywordPage, { generateMetadata } from './oldera-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaExpRateKeywordPage />;
}
