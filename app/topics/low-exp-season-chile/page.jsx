import LowExpSeasonChileKeywordPage, { generateMetadata } from './low-exp-season-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpSeasonChileKeywordPage />;
}
