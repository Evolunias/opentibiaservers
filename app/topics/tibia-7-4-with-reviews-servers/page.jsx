import Tibia74WithReviewsServersKeywordPage, { generateMetadata } from './tibia-7-4-with-reviews-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithReviewsServersKeywordPage />;
}
