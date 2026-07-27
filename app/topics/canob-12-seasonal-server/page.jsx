import Canob12SeasonalServerKeywordPage, { generateMetadata } from './canob-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob12SeasonalServerKeywordPage />;
}
