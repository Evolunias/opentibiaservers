import RealMapStatusChileKeywordPage, { generateMetadata } from './real-map-status-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapStatusChileKeywordPage />;
}
