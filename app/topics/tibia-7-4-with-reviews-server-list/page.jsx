import Tibia74WithReviewsServerListKeywordPage, { generateMetadata } from './tibia-7-4-with-reviews-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithReviewsServerListKeywordPage />;
}
