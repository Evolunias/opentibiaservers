import CyntaraCustomMapServerUsaKeywordPage, { generateMetadata } from './cyntara-custom-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraCustomMapServerUsaKeywordPage />;
}
