import PvpEnforcedSeasonChileKeywordPage, { generateMetadata } from './pvp-enforced-season-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedSeasonChileKeywordPage />;
}
