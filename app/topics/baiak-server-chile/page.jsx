import BaiakServerChileKeywordPage, { generateMetadata } from './baiak-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerChileKeywordPage />;
}
