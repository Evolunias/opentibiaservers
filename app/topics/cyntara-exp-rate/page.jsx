import CyntaraExpRateKeywordPage, { generateMetadata } from './cyntara-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraExpRateKeywordPage />;
}
