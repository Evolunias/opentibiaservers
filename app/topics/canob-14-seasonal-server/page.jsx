import Canob14SeasonalServerKeywordPage, { generateMetadata } from './canob-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob14SeasonalServerKeywordPage />;
}
