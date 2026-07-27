import Tibia74WithReviewsStatusKeywordPage, { generateMetadata } from './tibia-7-4-with-reviews-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithReviewsStatusKeywordPage />;
}
