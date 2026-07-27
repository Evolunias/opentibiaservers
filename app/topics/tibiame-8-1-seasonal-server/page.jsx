import Tibiame81SeasonalServerKeywordPage, { generateMetadata } from './tibiame-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame81SeasonalServerKeywordPage />;
}
