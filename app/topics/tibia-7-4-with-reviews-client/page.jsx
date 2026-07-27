import Tibia74WithReviewsClientKeywordPage, { generateMetadata } from './tibia-7-4-with-reviews-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithReviewsClientKeywordPage />;
}
