import NoResetSeasonChileKeywordPage, { generateMetadata } from './no-reset-season-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSeasonChileKeywordPage />;
}
