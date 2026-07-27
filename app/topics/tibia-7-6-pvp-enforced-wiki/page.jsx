import Tibia76PvpEnforcedWikiKeywordPage, { generateMetadata } from './tibia-7-6-pvp-enforced-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpEnforcedWikiKeywordPage />;
}
