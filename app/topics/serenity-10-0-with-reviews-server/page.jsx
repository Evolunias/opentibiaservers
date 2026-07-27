import Serenity100WithReviewsServerKeywordPage, { generateMetadata } from './serenity-10-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity100WithReviewsServerKeywordPage />;
}
