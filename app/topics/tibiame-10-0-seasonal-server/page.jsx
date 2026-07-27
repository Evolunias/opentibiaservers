import Tibiame100SeasonalServerKeywordPage, { generateMetadata } from './tibiame-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame100SeasonalServerKeywordPage />;
}
