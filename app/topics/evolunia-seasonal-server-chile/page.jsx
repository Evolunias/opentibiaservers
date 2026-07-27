import EvoluniaSeasonalServerChileKeywordPage, { generateMetadata } from './evolunia-seasonal-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaSeasonalServerChileKeywordPage />;
}
