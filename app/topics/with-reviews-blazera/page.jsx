import WithReviewsBlazeraKeywordPage, { generateMetadata } from './with-reviews-blazera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsBlazeraKeywordPage />;
}
