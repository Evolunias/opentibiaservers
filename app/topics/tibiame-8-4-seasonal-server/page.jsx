import Tibiame84SeasonalServerKeywordPage, { generateMetadata } from './tibiame-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame84SeasonalServerKeywordPage />;
}
