import PvpEnforcedGuideFranceKeywordPage, { generateMetadata } from './pvp-enforced-guide-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedGuideFranceKeywordPage />;
}
