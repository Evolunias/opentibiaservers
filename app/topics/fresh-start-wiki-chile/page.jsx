import FreshStartWikiChileKeywordPage, { generateMetadata } from './fresh-start-wiki-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartWikiChileKeywordPage />;
}
