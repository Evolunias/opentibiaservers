import ArchlightSeasonKeywordPage, { generateMetadata } from './archlight-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightSeasonKeywordPage />;
}
