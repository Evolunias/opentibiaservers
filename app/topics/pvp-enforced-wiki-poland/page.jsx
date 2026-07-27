import PvpEnforcedWikiPolandKeywordPage, { generateMetadata } from './pvp-enforced-wiki-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedWikiPolandKeywordPage />;
}
