import RealeraSeasonalServerChileKeywordPage, { generateMetadata } from './realera-seasonal-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraSeasonalServerChileKeywordPage />;
}
