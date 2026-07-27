import CustomMapOpenTibiaServerChileKeywordPage, { generateMetadata } from './custom-map-open-tibia-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapOpenTibiaServerChileKeywordPage />;
}
