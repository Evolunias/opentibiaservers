import CyntaraEuropeServerKeywordPage, { generateMetadata } from './cyntara-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraEuropeServerKeywordPage />;
}
