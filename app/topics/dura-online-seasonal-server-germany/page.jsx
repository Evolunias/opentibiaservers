import DuraOnlineSeasonalServerGermanyKeywordPage, { generateMetadata } from './dura-online-seasonal-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineSeasonalServerGermanyKeywordPage />;
}
