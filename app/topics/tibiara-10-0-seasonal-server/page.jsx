import Tibiara100SeasonalServerKeywordPage, { generateMetadata } from './tibiara-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara100SeasonalServerKeywordPage />;
}
