import Tibia14PvpEnforcedWikiKeywordPage, { generateMetadata } from './tibia-14-pvp-enforced-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpEnforcedWikiKeywordPage />;
}
