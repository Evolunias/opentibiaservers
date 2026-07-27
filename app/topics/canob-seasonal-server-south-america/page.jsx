import CanobSeasonalServerSouthAmericaKeywordPage, { generateMetadata } from './canob-seasonal-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobSeasonalServerSouthAmericaKeywordPage />;
}
