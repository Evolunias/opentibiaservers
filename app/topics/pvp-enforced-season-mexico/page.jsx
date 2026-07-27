import PvpEnforcedSeasonMexicoKeywordPage, { generateMetadata } from './pvp-enforced-season-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedSeasonMexicoKeywordPage />;
}
