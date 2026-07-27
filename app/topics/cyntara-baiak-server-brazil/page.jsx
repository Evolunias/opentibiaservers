import CyntaraBaiakServerBrazilKeywordPage, { generateMetadata } from './cyntara-baiak-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraBaiakServerBrazilKeywordPage />;
}
