import NilotSeasonalServerChileKeywordPage, { generateMetadata } from './nilot-seasonal-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotSeasonalServerChileKeywordPage />;
}
