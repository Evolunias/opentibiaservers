import Tibiara71SeasonalServerKeywordPage, { generateMetadata } from './tibiara-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara71SeasonalServerKeywordPage />;
}
