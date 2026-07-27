import PvpEnforcedWikiArgentinaKeywordPage, { generateMetadata } from './pvp-enforced-wiki-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedWikiArgentinaKeywordPage />;
}
