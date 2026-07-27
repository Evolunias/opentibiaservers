import HighExpWikiChileKeywordPage, { generateMetadata } from './high-exp-wiki-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpWikiChileKeywordPage />;
}
