import PvpEnforcedSeasonLatinAmericaKeywordPage, { generateMetadata } from './pvp-enforced-season-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedSeasonLatinAmericaKeywordPage />;
}
