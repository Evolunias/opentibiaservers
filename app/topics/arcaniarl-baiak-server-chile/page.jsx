import ArcaniarlBaiakServerChileKeywordPage, { generateMetadata } from './arcaniarl-baiak-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlBaiakServerChileKeywordPage />;
}
