import Tibia80PvpEnforcedWikiKeywordPage, { generateMetadata } from './tibia-8-0-pvp-enforced-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpEnforcedWikiKeywordPage />;
}
