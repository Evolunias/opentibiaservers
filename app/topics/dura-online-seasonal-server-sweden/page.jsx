import DuraOnlineSeasonalServerSwedenKeywordPage, { generateMetadata } from './dura-online-seasonal-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineSeasonalServerSwedenKeywordPage />;
}
