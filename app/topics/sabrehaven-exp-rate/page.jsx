import SabrehavenExpRateKeywordPage, { generateMetadata } from './sabrehaven-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenExpRateKeywordPage />;
}
