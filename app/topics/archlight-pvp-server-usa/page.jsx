import ArchlightPvpServerUsaKeywordPage, { generateMetadata } from './archlight-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightPvpServerUsaKeywordPage />;
}
