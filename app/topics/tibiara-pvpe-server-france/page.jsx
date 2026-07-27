import TibiaraPvpeServerFranceKeywordPage, { generateMetadata } from './tibiara-pvpe-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraPvpeServerFranceKeywordPage />;
}
