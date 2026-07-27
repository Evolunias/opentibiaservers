import CanobSeasonalServerPolandKeywordPage, { generateMetadata } from './canob-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobSeasonalServerPolandKeywordPage />;
}
