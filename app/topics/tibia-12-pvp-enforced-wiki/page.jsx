import Tibia12PvpEnforcedWikiKeywordPage, { generateMetadata } from './tibia-12-pvp-enforced-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpEnforcedWikiKeywordPage />;
}
