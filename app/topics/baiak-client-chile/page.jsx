import BaiakClientChileKeywordPage, { generateMetadata } from './baiak-client-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakClientChileKeywordPage />;
}
