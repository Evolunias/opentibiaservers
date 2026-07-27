import Tibia84PvpEnforcedWikiKeywordPage, { generateMetadata } from './tibia-8-4-pvp-enforced-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpEnforcedWikiKeywordPage />;
}
