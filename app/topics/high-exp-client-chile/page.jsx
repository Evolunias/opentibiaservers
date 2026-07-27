import HighExpClientChileKeywordPage, { generateMetadata } from './high-exp-client-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpClientChileKeywordPage />;
}
