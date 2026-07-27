import CoxaotBaiakServerChileKeywordPage, { generateMetadata } from './coxaot-baiak-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotBaiakServerChileKeywordPage />;
}
