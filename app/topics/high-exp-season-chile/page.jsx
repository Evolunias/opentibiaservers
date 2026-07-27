import HighExpSeasonChileKeywordPage, { generateMetadata } from './high-exp-season-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpSeasonChileKeywordPage />;
}
