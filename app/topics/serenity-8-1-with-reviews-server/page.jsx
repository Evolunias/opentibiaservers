import Serenity81WithReviewsServerKeywordPage, { generateMetadata } from './serenity-8-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity81WithReviewsServerKeywordPage />;
}
