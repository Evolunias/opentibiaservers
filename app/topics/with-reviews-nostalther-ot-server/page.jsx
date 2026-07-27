import WithReviewsNostaltherOtServerKeywordPage, { generateMetadata } from './with-reviews-nostalther-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNostaltherOtServerKeywordPage />;
}
