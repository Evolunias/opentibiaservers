import PvpLaunchChileKeywordPage, { generateMetadata } from './pvp-launch-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpLaunchChileKeywordPage />;
}
