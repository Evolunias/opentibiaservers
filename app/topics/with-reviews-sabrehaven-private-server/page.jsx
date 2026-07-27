import WithReviewsSabrehavenPrivateServerKeywordPage, { generateMetadata } from './with-reviews-sabrehaven-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSabrehavenPrivateServerKeywordPage />;
}
