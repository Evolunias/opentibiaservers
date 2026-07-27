import CyntaraPvpeServerUkKeywordPage, { generateMetadata } from './cyntara-pvpe-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraPvpeServerUkKeywordPage />;
}
