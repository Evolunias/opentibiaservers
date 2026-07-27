import RealMapWikiChileKeywordPage, { generateMetadata } from './real-map-wiki-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapWikiChileKeywordPage />;
}
