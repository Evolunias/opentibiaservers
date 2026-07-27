import BaiakLaunchChileKeywordPage, { generateMetadata } from './baiak-launch-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakLaunchChileKeywordPage />;
}
