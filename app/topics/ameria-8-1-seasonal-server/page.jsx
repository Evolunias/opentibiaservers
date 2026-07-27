import Ameria81SeasonalServerKeywordPage, { generateMetadata } from './ameria-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria81SeasonalServerKeywordPage />;
}
