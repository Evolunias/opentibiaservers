import NoxiousotCustomMapServerFranceKeywordPage, { generateMetadata } from './noxiousot-custom-map-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotCustomMapServerFranceKeywordPage />;
}
