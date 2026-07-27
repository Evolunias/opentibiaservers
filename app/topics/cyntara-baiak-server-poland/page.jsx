import CyntaraBaiakServerPolandKeywordPage, { generateMetadata } from './cyntara-baiak-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraBaiakServerPolandKeywordPage />;
}
