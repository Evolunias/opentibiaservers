import CyntaraClientKeywordPage, { generateMetadata } from './cyntara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraClientKeywordPage />;
}
