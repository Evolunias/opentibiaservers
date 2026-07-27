import PvpEnforcedWikiCanadaKeywordPage, { generateMetadata } from './pvp-enforced-wiki-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedWikiCanadaKeywordPage />;
}
