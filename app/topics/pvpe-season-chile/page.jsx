import PvpeSeasonChileKeywordPage, { generateMetadata } from './pvpe-season-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeSeasonChileKeywordPage />;
}
