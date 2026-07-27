import TibiaoriginsExpRateKeywordPage, { generateMetadata } from './tibiaorigins-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsExpRateKeywordPage />;
}
