import Serenity15WithReviewsServerKeywordPage, { generateMetadata } from './serenity-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity15WithReviewsServerKeywordPage />;
}
