import EvoleraBaiakServerChileKeywordPage, { generateMetadata } from './evolera-baiak-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraBaiakServerChileKeywordPage />;
}
