import WithReviewsBlazeraPrivateServerKeywordPage, { generateMetadata } from './with-reviews-blazera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsBlazeraPrivateServerKeywordPage />;
}
