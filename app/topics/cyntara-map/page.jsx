import CyntaraMapKeywordPage, { generateMetadata } from './cyntara-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraMapKeywordPage />;
}
