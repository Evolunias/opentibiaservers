import NoResetServerListChileKeywordPage, { generateMetadata } from './no-reset-server-list-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServerListChileKeywordPage />;
}
