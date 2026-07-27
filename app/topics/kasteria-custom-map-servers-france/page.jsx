import KasteriaCustomMapServersFranceKeywordPage, { generateMetadata } from './kasteria-custom-map-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaCustomMapServersFranceKeywordPage />;
}
