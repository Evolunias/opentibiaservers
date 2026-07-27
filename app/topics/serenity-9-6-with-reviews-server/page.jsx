import Serenity96WithReviewsServerKeywordPage, { generateMetadata } from './serenity-9-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity96WithReviewsServerKeywordPage />;
}
