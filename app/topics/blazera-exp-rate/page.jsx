import BlazeraExpRateKeywordPage, { generateMetadata } from './blazera-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraExpRateKeywordPage />;
}
