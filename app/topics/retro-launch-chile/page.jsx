import RetroLaunchChileKeywordPage, { generateMetadata } from './retro-launch-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroLaunchChileKeywordPage />;
}
