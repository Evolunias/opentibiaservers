import AlasteraPvpeServerUsaKeywordPage, { generateMetadata } from './alastera-pvpe-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraPvpeServerUsaKeywordPage />;
}
