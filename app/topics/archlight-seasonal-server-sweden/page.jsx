import ArchlightSeasonalServerSwedenKeywordPage, { generateMetadata } from './archlight-seasonal-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightSeasonalServerSwedenKeywordPage />;
}
