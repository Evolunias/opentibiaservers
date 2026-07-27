import BlazeraRetroServerChileKeywordPage, { generateMetadata } from './blazera-retro-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraRetroServerChileKeywordPage />;
}
