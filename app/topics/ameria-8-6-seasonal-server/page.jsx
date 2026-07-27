import Ameria86SeasonalServerKeywordPage, { generateMetadata } from './ameria-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria86SeasonalServerKeywordPage />;
}
