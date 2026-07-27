import WithReviewsLumineraPrivateServerKeywordPage, { generateMetadata } from './with-reviews-luminera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsLumineraPrivateServerKeywordPage />;
}
