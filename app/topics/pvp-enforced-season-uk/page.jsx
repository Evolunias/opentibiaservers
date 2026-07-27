import PvpEnforcedSeasonUkKeywordPage, { generateMetadata } from './pvp-enforced-season-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedSeasonUkKeywordPage />;
}
