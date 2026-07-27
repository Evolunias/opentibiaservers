import Tibia13PvpEnforcedWikiKeywordPage, { generateMetadata } from './tibia-13-pvp-enforced-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpEnforcedWikiKeywordPage />;
}
