import NoResetGuideChileKeywordPage, { generateMetadata } from './no-reset-guide-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetGuideChileKeywordPage />;
}
