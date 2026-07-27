import PvpSeasonChileKeywordPage, { generateMetadata } from './pvp-season-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpSeasonChileKeywordPage />;
}
