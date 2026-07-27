import WithReviewsMidhemPrivateServerKeywordPage, { generateMetadata } from './with-reviews-midhem-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMidhemPrivateServerKeywordPage />;
}
