import BaiakOpenTibiaServerChileKeywordPage, { generateMetadata } from './baiak-open-tibia-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakOpenTibiaServerChileKeywordPage />;
}
