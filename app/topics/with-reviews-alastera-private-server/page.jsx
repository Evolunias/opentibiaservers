import WithReviewsAlasteraPrivateServerKeywordPage, { generateMetadata } from './with-reviews-alastera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAlasteraPrivateServerKeywordPage />;
}
