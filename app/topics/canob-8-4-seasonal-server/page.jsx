import Canob84SeasonalServerKeywordPage, { generateMetadata } from './canob-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob84SeasonalServerKeywordPage />;
}
