import LumineraBaiakServerChileKeywordPage, { generateMetadata } from './luminera-baiak-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraBaiakServerChileKeywordPage />;
}
