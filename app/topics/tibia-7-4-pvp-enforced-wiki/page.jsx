import Tibia74PvpEnforcedWikiKeywordPage, { generateMetadata } from './tibia-7-4-pvp-enforced-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PvpEnforcedWikiKeywordPage />;
}
