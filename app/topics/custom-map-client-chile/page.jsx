import CustomMapClientChileKeywordPage, { generateMetadata } from './custom-map-client-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapClientChileKeywordPage />;
}
