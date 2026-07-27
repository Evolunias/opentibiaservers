import Tibiaretro81WithReviewsServerKeywordPage, { generateMetadata } from './tibiaretro-8-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro81WithReviewsServerKeywordPage />;
}
