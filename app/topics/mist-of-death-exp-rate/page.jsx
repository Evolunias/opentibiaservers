import MistOfDeathExpRateKeywordPage, { generateMetadata } from './mist-of-death-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathExpRateKeywordPage />;
}
