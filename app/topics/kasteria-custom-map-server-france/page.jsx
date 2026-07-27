import KasteriaCustomMapServerFranceKeywordPage, { generateMetadata } from './kasteria-custom-map-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaCustomMapServerFranceKeywordPage />;
}
