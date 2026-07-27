import FreshStartLaunchChileKeywordPage, { generateMetadata } from './fresh-start-launch-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLaunchChileKeywordPage />;
}
