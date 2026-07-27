import SeasonalLaunchChileKeywordPage, { generateMetadata } from './seasonal-launch-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalLaunchChileKeywordPage />;
}
