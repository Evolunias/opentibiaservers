import MiracleCustomMapServerFranceKeywordPage, { generateMetadata } from './miracle-custom-map-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleCustomMapServerFranceKeywordPage />;
}
