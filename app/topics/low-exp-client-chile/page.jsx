import LowExpClientChileKeywordPage, { generateMetadata } from './low-exp-client-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpClientChileKeywordPage />;
}
