import VenoreotSeasonalServerChileKeywordPage, { generateMetadata } from './venoreot-seasonal-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotSeasonalServerChileKeywordPage />;
}
