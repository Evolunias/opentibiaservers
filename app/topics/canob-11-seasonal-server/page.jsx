import Canob11SeasonalServerKeywordPage, { generateMetadata } from './canob-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob11SeasonalServerKeywordPage />;
}
