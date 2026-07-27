import WithReviewsClassicusPrivateServerKeywordPage, { generateMetadata } from './with-reviews-classicus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClassicusPrivateServerKeywordPage />;
}
