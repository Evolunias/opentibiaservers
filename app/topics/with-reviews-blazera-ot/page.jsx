import WithReviewsBlazeraOtKeywordPage, { generateMetadata } from './with-reviews-blazera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsBlazeraOtKeywordPage />;
}
