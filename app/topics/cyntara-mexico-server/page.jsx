import CyntaraMexicoServerKeywordPage, { generateMetadata } from './cyntara-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraMexicoServerKeywordPage />;
}
