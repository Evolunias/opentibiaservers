import CyntaraRealMapServerLatinAmericaKeywordPage, { generateMetadata } from './cyntara-real-map-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraRealMapServerLatinAmericaKeywordPage />;
}
