import PvpEnforcedWikiUsaKeywordPage, { generateMetadata } from './pvp-enforced-wiki-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedWikiUsaKeywordPage />;
}
