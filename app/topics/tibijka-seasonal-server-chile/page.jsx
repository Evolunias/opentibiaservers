import TibijkaSeasonalServerChileKeywordPage, { generateMetadata } from './tibijka-seasonal-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaSeasonalServerChileKeywordPage />;
}
