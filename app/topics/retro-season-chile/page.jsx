import RetroSeasonChileKeywordPage, { generateMetadata } from './retro-season-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroSeasonChileKeywordPage />;
}
