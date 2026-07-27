import CyntaraUkServerKeywordPage, { generateMetadata } from './cyntara-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraUkServerKeywordPage />;
}
