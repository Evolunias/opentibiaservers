import BaiakStatusChileKeywordPage, { generateMetadata } from './baiak-status-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakStatusChileKeywordPage />;
}
