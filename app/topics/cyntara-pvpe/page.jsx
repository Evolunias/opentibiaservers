import CyntaraPvpeKeywordPage, { generateMetadata } from './cyntara-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraPvpeKeywordPage />;
}
