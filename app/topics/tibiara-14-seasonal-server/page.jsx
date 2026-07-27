import Tibiara14SeasonalServerKeywordPage, { generateMetadata } from './tibiara-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara14SeasonalServerKeywordPage />;
}
