import TibijkaPvpeServerFranceKeywordPage, { generateMetadata } from './tibijka-pvpe-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaPvpeServerFranceKeywordPage />;
}
