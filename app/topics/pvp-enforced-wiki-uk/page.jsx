import PvpEnforcedWikiUkKeywordPage, { generateMetadata } from './pvp-enforced-wiki-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedWikiUkKeywordPage />;
}
