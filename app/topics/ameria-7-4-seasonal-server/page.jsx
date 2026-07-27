import Ameria74SeasonalServerKeywordPage, { generateMetadata } from './ameria-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria74SeasonalServerKeywordPage />;
}
