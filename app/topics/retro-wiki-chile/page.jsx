import RetroWikiChileKeywordPage, { generateMetadata } from './retro-wiki-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroWikiChileKeywordPage />;
}
