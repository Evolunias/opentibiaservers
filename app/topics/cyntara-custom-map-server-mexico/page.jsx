import CyntaraCustomMapServerMexicoKeywordPage, { generateMetadata } from './cyntara-custom-map-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraCustomMapServerMexicoKeywordPage />;
}
