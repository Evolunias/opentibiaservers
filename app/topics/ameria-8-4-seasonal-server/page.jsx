import Ameria84SeasonalServerKeywordPage, { generateMetadata } from './ameria-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria84SeasonalServerKeywordPage />;
}
