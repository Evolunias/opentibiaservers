import CoxaotRealMapServerChileKeywordPage, { generateMetadata } from './coxaot-real-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotRealMapServerChileKeywordPage />;
}
