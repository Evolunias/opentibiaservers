import Tibiame86SeasonalServerKeywordPage, { generateMetadata } from './tibiame-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame86SeasonalServerKeywordPage />;
}
