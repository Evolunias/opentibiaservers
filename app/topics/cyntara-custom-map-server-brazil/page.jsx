import CyntaraCustomMapServerBrazilKeywordPage, { generateMetadata } from './cyntara-custom-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraCustomMapServerBrazilKeywordPage />;
}
