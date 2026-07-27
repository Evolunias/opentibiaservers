import LowExpLaunchChileKeywordPage, { generateMetadata } from './low-exp-launch-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpLaunchChileKeywordPage />;
}
