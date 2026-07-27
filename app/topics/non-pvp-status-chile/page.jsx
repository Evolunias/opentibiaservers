import NonPvpStatusChileKeywordPage, { generateMetadata } from './non-pvp-status-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpStatusChileKeywordPage />;
}
