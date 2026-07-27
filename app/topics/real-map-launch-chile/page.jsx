import RealMapLaunchChileKeywordPage, { generateMetadata } from './real-map-launch-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLaunchChileKeywordPage />;
}
