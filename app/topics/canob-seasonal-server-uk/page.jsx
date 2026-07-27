import CanobSeasonalServerUkKeywordPage, { generateMetadata } from './canob-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobSeasonalServerUkKeywordPage />;
}
