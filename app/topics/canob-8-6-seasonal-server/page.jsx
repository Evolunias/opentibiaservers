import Canob86SeasonalServerKeywordPage, { generateMetadata } from './canob-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob86SeasonalServerKeywordPage />;
}
