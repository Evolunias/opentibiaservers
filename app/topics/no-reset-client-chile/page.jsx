import NoResetClientChileKeywordPage, { generateMetadata } from './no-reset-client-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClientChileKeywordPage />;
}
