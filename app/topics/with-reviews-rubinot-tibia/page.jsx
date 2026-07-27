import WithReviewsRubinotTibiaKeywordPage, { generateMetadata } from './with-reviews-rubinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRubinotTibiaKeywordPage />;
}
