import HighExpLaunchChileKeywordPage, { generateMetadata } from './high-exp-launch-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpLaunchChileKeywordPage />;
}
