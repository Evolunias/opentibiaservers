import Tibia71PvpEnforcedWikiKeywordPage, { generateMetadata } from './tibia-7-1-pvp-enforced-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpEnforcedWikiKeywordPage />;
}
