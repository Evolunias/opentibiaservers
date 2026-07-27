import CustomMapLaunchChileKeywordPage, { generateMetadata } from './custom-map-launch-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapLaunchChileKeywordPage />;
}
