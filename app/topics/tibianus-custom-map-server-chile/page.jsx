import TibianusCustomMapServerChileKeywordPage, { generateMetadata } from './tibianus-custom-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusCustomMapServerChileKeywordPage />;
}
