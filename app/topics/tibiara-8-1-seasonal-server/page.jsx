import Tibiara81SeasonalServerKeywordPage, { generateMetadata } from './tibiara-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara81SeasonalServerKeywordPage />;
}
