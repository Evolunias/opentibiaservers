import CanobSeasonalServerGermanyKeywordPage, { generateMetadata } from './canob-seasonal-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobSeasonalServerGermanyKeywordPage />;
}
