import DuraOnlineSeasonalServerUkKeywordPage, { generateMetadata } from './dura-online-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineSeasonalServerUkKeywordPage />;
}
