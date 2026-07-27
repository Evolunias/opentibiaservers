import Ameria11SeasonalServerKeywordPage, { generateMetadata } from './ameria-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria11SeasonalServerKeywordPage />;
}
