import WithReviewsThaisotPrivateServerKeywordPage, { generateMetadata } from './with-reviews-thaisot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThaisotPrivateServerKeywordPage />;
}
