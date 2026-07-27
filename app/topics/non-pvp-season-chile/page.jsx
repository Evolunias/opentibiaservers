import NonPvpSeasonChileKeywordPage, { generateMetadata } from './non-pvp-season-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpSeasonChileKeywordPage />;
}
