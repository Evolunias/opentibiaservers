import WithReviewsNostaltherOtKeywordPage, { generateMetadata } from './with-reviews-nostalther-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNostaltherOtKeywordPage />;
}
