import CanobSeasonalServerCanadaKeywordPage, { generateMetadata } from './canob-seasonal-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobSeasonalServerCanadaKeywordPage />;
}
