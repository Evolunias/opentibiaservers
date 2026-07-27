import CyntaraLoginKeywordPage, { generateMetadata } from './cyntara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraLoginKeywordPage />;
}
