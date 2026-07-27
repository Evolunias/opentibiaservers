import CustomMapSeasonChileKeywordPage, { generateMetadata } from './custom-map-season-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapSeasonChileKeywordPage />;
}
