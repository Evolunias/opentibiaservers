import CyntaraBaiakServerUkKeywordPage, { generateMetadata } from './cyntara-baiak-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraBaiakServerUkKeywordPage />;
}
