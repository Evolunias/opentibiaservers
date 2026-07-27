import AlasteraReviewsKeywordPage, { generateMetadata } from './alastera-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraReviewsKeywordPage />;
}
