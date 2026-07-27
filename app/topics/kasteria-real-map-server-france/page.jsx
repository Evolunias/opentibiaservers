import KasteriaRealMapServerFranceKeywordPage, { generateMetadata } from './kasteria-real-map-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaRealMapServerFranceKeywordPage />;
}
