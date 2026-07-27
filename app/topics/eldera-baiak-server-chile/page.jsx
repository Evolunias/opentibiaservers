import ElderaBaiakServerChileKeywordPage, { generateMetadata } from './eldera-baiak-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaBaiakServerChileKeywordPage />;
}
