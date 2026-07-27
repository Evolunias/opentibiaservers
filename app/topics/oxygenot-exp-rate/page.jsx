import OxygenotExpRateKeywordPage, { generateMetadata } from './oxygenot-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotExpRateKeywordPage />;
}
