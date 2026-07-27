import NoResetServerChileKeywordPage, { generateMetadata } from './no-reset-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServerChileKeywordPage />;
}
