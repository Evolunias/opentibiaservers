import Serenity14WithReviewsServerKeywordPage, { generateMetadata } from './serenity-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity14WithReviewsServerKeywordPage />;
}
