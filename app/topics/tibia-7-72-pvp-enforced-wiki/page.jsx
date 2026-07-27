import Tibia772PvpEnforcedWikiKeywordPage, { generateMetadata } from './tibia-7-72-pvp-enforced-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772PvpEnforcedWikiKeywordPage />;
}
