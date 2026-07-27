import Tibia74ServerReviewsKeywordPage, { generateMetadata } from './tibia-7-4-server-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74ServerReviewsKeywordPage />;
}
