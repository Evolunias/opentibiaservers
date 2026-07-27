import BaiakWikiChileKeywordPage, { generateMetadata } from './baiak-wiki-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakWikiChileKeywordPage />;
}
