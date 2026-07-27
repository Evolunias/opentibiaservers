import Tibia1098PvpEnforcedWikiKeywordPage, { generateMetadata } from './tibia-10-98-pvp-enforced-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpEnforcedWikiKeywordPage />;
}
