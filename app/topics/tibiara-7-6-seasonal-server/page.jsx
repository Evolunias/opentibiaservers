import Tibiara76SeasonalServerKeywordPage, { generateMetadata } from './tibiara-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara76SeasonalServerKeywordPage />;
}
