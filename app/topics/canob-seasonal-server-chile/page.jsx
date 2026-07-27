import CanobSeasonalServerChileKeywordPage, { generateMetadata } from './canob-seasonal-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobSeasonalServerChileKeywordPage />;
}
