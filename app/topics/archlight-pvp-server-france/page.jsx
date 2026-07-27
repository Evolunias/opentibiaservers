import ArchlightPvpServerFranceKeywordPage, { generateMetadata } from './archlight-pvp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightPvpServerFranceKeywordPage />;
}
