import Tibiame13SeasonalServerKeywordPage, { generateMetadata } from './tibiame-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame13SeasonalServerKeywordPage />;
}
