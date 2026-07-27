import AlasteraPvpeServerGermanyKeywordPage, { generateMetadata } from './alastera-pvpe-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraPvpeServerGermanyKeywordPage />;
}
