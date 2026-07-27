import PvpEnforcedSeasonFranceKeywordPage, { generateMetadata } from './pvp-enforced-season-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedSeasonFranceKeywordPage />;
}
