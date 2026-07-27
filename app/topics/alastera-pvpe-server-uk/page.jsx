import AlasteraPvpeServerUkKeywordPage, { generateMetadata } from './alastera-pvpe-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraPvpeServerUkKeywordPage />;
}
