import ThorniaSeasonalServerChileKeywordPage, { generateMetadata } from './thornia-seasonal-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaSeasonalServerChileKeywordPage />;
}
