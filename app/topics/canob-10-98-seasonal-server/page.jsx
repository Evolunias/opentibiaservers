import Canob1098SeasonalServerKeywordPage, { generateMetadata } from './canob-10-98-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob1098SeasonalServerKeywordPage />;
}
