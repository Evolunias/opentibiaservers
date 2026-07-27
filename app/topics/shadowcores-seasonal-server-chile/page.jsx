import ShadowcoresSeasonalServerChileKeywordPage, { generateMetadata } from './shadowcores-seasonal-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresSeasonalServerChileKeywordPage />;
}
