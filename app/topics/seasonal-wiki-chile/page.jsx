import SeasonalWikiChileKeywordPage, { generateMetadata } from './seasonal-wiki-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalWikiChileKeywordPage />;
}
