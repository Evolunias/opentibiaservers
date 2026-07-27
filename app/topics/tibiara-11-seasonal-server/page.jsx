import Tibiara11SeasonalServerKeywordPage, { generateMetadata } from './tibiara-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara11SeasonalServerKeywordPage />;
}
