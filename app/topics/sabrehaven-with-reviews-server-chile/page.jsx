import SabrehavenWithReviewsServerChileKeywordPage, { generateMetadata } from './sabrehaven-with-reviews-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenWithReviewsServerChileKeywordPage />;
}
