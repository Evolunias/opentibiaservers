import LowExpWikiChileKeywordPage, { generateMetadata } from './low-exp-wiki-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpWikiChileKeywordPage />;
}
