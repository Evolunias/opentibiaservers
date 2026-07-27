import ArchlightCustomMapServerFranceKeywordPage, { generateMetadata } from './archlight-custom-map-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightCustomMapServerFranceKeywordPage />;
}
