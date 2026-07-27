import CustomMapWikiChileKeywordPage, { generateMetadata } from './custom-map-wiki-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapWikiChileKeywordPage />;
}
