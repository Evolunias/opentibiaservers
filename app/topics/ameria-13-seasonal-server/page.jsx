import Ameria13SeasonalServerKeywordPage, { generateMetadata } from './ameria-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria13SeasonalServerKeywordPage />;
}
