import CustomMapServersChileKeywordPage, { generateMetadata } from './custom-map-servers-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapServersChileKeywordPage />;
}
