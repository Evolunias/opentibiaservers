import WithReviewsOtmadnessTibiaKeywordPage, { generateMetadata } from './with-reviews-otmadness-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOtmadnessTibiaKeywordPage />;
}
