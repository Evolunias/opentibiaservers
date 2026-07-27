import RetroGuideChileKeywordPage, { generateMetadata } from './retro-guide-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroGuideChileKeywordPage />;
}
