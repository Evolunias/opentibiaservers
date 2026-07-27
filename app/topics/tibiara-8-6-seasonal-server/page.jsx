import Tibiara86SeasonalServerKeywordPage, { generateMetadata } from './tibiara-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara86SeasonalServerKeywordPage />;
}
