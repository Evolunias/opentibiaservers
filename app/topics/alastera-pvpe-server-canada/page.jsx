import AlasteraPvpeServerCanadaKeywordPage, { generateMetadata } from './alastera-pvpe-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraPvpeServerCanadaKeywordPage />;
}
