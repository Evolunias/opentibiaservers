import CyntaraRealMapServerCanadaKeywordPage, { generateMetadata } from './cyntara-real-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraRealMapServerCanadaKeywordPage />;
}
