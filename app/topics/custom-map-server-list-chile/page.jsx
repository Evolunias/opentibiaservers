import CustomMapServerListChileKeywordPage, { generateMetadata } from './custom-map-server-list-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapServerListChileKeywordPage />;
}
