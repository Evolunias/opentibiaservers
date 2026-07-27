import PvpEnforcedWikiGermanyKeywordPage, { generateMetadata } from './pvp-enforced-wiki-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedWikiGermanyKeywordPage />;
}
