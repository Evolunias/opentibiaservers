import PvpeOtServerChileKeywordPage, { generateMetadata } from './pvpe-ot-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeOtServerChileKeywordPage />;
}
