import Tibia74WithReviewsServerKeywordPage, { generateMetadata } from './tibia-7-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithReviewsServerKeywordPage />;
}
