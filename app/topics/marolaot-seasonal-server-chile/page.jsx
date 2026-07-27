import MarolaotSeasonalServerChileKeywordPage, { generateMetadata } from './marolaot-seasonal-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotSeasonalServerChileKeywordPage />;
}
