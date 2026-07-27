import AlasteraNonPvpServerChileKeywordPage, { generateMetadata } from './alastera-non-pvp-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraNonPvpServerChileKeywordPage />;
}
