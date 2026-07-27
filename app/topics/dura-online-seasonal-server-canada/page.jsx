import DuraOnlineSeasonalServerCanadaKeywordPage, { generateMetadata } from './dura-online-seasonal-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineSeasonalServerCanadaKeywordPage />;
}
