import ThorniaExpRateKeywordPage, { generateMetadata } from './thornia-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaExpRateKeywordPage />;
}
