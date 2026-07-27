import TibiameCustomMapServersFranceKeywordPage, { generateMetadata } from './tibiame-custom-map-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameCustomMapServersFranceKeywordPage />;
}
