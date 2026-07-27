import Tibia11PvpEnforcedWikiKeywordPage, { generateMetadata } from './tibia-11-pvp-enforced-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpEnforcedWikiKeywordPage />;
}
