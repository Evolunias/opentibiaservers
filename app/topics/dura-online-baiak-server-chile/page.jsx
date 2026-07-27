import DuraOnlineBaiakServerChileKeywordPage, { generateMetadata } from './dura-online-baiak-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineBaiakServerChileKeywordPage />;
}
