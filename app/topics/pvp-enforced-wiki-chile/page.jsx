import PvpEnforcedWikiChileKeywordPage, { generateMetadata } from './pvp-enforced-wiki-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedWikiChileKeywordPage />;
}
