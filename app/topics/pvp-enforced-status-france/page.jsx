import PvpEnforcedStatusFranceKeywordPage, { generateMetadata } from './pvp-enforced-status-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedStatusFranceKeywordPage />;
}
