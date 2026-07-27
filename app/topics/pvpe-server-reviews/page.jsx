import PvpeServerReviewsKeywordPage, { generateMetadata } from './pvpe-server-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerReviewsKeywordPage />;
}
