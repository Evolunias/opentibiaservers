import ArchlightPvpKeywordPage, { generateMetadata } from './archlight-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightPvpKeywordPage />;
}
