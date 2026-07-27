import NoResetLaunchChileKeywordPage, { generateMetadata } from './no-reset-launch-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLaunchChileKeywordPage />;
}
