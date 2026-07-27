import RubinotWithReviewsServerPolandKeywordPage, { generateMetadata } from './rubinot-with-reviews-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotWithReviewsServerPolandKeywordPage />;
}
