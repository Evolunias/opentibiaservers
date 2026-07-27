import NonPvpServerListChileKeywordPage, { generateMetadata } from './non-pvp-server-list-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServerListChileKeywordPage />;
}
