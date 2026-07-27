import CarlinotBaiakServerChileKeywordPage, { generateMetadata } from './carlinot-baiak-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotBaiakServerChileKeywordPage />;
}
