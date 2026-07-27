import Canob76SeasonalServerKeywordPage, { generateMetadata } from './canob-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob76SeasonalServerKeywordPage />;
}
