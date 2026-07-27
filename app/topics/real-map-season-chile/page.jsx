import RealMapSeasonChileKeywordPage, { generateMetadata } from './real-map-season-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSeasonChileKeywordPage />;
}
