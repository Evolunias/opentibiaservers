import NilotExpRateKeywordPage, { generateMetadata } from './nilot-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotExpRateKeywordPage />;
}
