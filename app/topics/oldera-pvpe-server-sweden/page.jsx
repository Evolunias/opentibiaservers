import OlderaPvpeServerSwedenKeywordPage, { generateMetadata } from './oldera-pvpe-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaPvpeServerSwedenKeywordPage />;
}
