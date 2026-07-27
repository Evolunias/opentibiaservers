import WithReviewsImperianicTibiaKeywordPage, { generateMetadata } from './with-reviews-imperianic-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsImperianicTibiaKeywordPage />;
}
