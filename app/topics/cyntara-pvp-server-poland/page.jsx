import CyntaraPvpServerPolandKeywordPage, { generateMetadata } from './cyntara-pvp-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraPvpServerPolandKeywordPage />;
}
