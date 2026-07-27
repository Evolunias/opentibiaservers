import CyntaraPolandServerKeywordPage, { generateMetadata } from './cyntara-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraPolandServerKeywordPage />;
}
