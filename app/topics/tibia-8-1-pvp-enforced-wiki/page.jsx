import Tibia81PvpEnforcedWikiKeywordPage, { generateMetadata } from './tibia-8-1-pvp-enforced-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpEnforcedWikiKeywordPage />;
}
