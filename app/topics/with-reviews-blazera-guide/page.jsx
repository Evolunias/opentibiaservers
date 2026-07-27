import WithReviewsBlazeraGuideKeywordPage, { generateMetadata } from './with-reviews-blazera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsBlazeraGuideKeywordPage />;
}
