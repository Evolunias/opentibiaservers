import CustomMapStatusChileKeywordPage, { generateMetadata } from './custom-map-status-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapStatusChileKeywordPage />;
}
