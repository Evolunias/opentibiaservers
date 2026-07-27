import EvoleraSeasonalServerSwedenKeywordPage, { generateMetadata } from './evolera-seasonal-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraSeasonalServerSwedenKeywordPage />;
}
