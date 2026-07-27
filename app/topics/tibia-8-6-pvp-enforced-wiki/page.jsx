import Tibia86PvpEnforcedWikiKeywordPage, { generateMetadata } from './tibia-8-6-pvp-enforced-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpEnforcedWikiKeywordPage />;
}
