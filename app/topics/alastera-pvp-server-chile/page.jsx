import AlasteraPvpServerChileKeywordPage, { generateMetadata } from './alastera-pvp-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraPvpServerChileKeywordPage />;
}
