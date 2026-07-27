import WithReviewsBlazeraServerKeywordPage, { generateMetadata } from './with-reviews-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsBlazeraServerKeywordPage />;
}
