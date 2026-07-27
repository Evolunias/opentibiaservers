import Tibia100PvpEnforcedWikiKeywordPage, { generateMetadata } from './tibia-10-0-pvp-enforced-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpEnforcedWikiKeywordPage />;
}
