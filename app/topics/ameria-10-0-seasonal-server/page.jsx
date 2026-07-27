import Ameria100SeasonalServerKeywordPage, { generateMetadata } from './ameria-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria100SeasonalServerKeywordPage />;
}
