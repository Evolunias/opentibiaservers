import CyntaraCustomMapServerArgentinaKeywordPage, { generateMetadata } from './cyntara-custom-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraCustomMapServerArgentinaKeywordPage />;
}
