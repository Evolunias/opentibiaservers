import BlazeraBaiakServerChileKeywordPage, { generateMetadata } from './blazera-baiak-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraBaiakServerChileKeywordPage />;
}
