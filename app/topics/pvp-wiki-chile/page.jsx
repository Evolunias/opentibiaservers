import PvpWikiChileKeywordPage, { generateMetadata } from './pvp-wiki-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpWikiChileKeywordPage />;
}
