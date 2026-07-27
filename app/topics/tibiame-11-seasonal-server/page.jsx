import Tibiame11SeasonalServerKeywordPage, { generateMetadata } from './tibiame-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame11SeasonalServerKeywordPage />;
}
