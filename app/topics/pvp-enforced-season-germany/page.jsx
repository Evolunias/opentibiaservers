import PvpEnforcedSeasonGermanyKeywordPage, { generateMetadata } from './pvp-enforced-season-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedSeasonGermanyKeywordPage />;
}
