import NilotPvpServerChileKeywordPage, { generateMetadata } from './nilot-pvp-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotPvpServerChileKeywordPage />;
}
