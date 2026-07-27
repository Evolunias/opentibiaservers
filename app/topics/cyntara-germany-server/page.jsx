import CyntaraGermanyServerKeywordPage, { generateMetadata } from './cyntara-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraGermanyServerKeywordPage />;
}
