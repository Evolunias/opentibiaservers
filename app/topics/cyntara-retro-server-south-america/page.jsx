import CyntaraRetroServerSouthAmericaKeywordPage, { generateMetadata } from './cyntara-retro-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraRetroServerSouthAmericaKeywordPage />;
}
