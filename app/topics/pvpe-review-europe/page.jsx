import PvpeReviewEuropeKeywordPage, { generateMetadata } from './pvpe-review-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeReviewEuropeKeywordPage />;
}
