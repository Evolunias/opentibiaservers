import MidhemExpRateKeywordPage, { generateMetadata } from './midhem-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemExpRateKeywordPage />;
}
