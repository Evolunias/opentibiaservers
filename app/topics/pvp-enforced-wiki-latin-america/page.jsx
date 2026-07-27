import PvpEnforcedWikiLatinAmericaKeywordPage, { generateMetadata } from './pvp-enforced-wiki-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedWikiLatinAmericaKeywordPage />;
}
