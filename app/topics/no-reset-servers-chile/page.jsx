import NoResetServersChileKeywordPage, { generateMetadata } from './no-reset-servers-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServersChileKeywordPage />;
}
