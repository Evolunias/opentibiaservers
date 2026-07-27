import OtservlistReviewsKeywordPage, { generateMetadata } from './otservlist-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistReviewsKeywordPage />;
}
