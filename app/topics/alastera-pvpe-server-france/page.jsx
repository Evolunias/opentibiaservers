import AlasteraPvpeServerFranceKeywordPage, { generateMetadata } from './alastera-pvpe-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraPvpeServerFranceKeywordPage />;
}
