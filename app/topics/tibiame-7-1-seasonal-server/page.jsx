import Tibiame71SeasonalServerKeywordPage, { generateMetadata } from './tibiame-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame71SeasonalServerKeywordPage />;
}
