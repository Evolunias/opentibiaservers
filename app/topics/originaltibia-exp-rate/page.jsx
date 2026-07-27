import OriginaltibiaExpRateKeywordPage, { generateMetadata } from './originaltibia-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaExpRateKeywordPage />;
}
