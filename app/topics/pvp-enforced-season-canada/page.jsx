import PvpEnforcedSeasonCanadaKeywordPage, { generateMetadata } from './pvp-enforced-season-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedSeasonCanadaKeywordPage />;
}
