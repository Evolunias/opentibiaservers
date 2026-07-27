import PvpEnforcedWikiMexicoKeywordPage, { generateMetadata } from './pvp-enforced-wiki-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedWikiMexicoKeywordPage />;
}
