import WithReviewsSerenityPrivateServerKeywordPage, { generateMetadata } from './with-reviews-serenity-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSerenityPrivateServerKeywordPage />;
}
