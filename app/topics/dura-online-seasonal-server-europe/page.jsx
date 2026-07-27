import DuraOnlineSeasonalServerEuropeKeywordPage, { generateMetadata } from './dura-online-seasonal-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineSeasonalServerEuropeKeywordPage />;
}
