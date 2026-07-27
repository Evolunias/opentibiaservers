import NonPvpOtServerChileKeywordPage, { generateMetadata } from './non-pvp-ot-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOtServerChileKeywordPage />;
}
