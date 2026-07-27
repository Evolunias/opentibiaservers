import AlasteraPvpeServerSwedenKeywordPage, { generateMetadata } from './alastera-pvpe-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraPvpeServerSwedenKeywordPage />;
}
