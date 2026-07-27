import WithReviewsCoxaotPrivateServerKeywordPage, { generateMetadata } from './with-reviews-coxaot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCoxaotPrivateServerKeywordPage />;
}
