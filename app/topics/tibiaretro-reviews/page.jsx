import TibiaretroReviewsKeywordPage, { generateMetadata } from './tibiaretro-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroReviewsKeywordPage />;
}
