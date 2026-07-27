import EvoleraExpRateKeywordPage, { generateMetadata } from './evolera-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraExpRateKeywordPage />;
}
