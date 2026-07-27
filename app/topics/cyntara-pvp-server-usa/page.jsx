import CyntaraPvpServerUsaKeywordPage, { generateMetadata } from './cyntara-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraPvpServerUsaKeywordPage />;
}
