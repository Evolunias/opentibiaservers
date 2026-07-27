import Tibiaretro71WithReviewsServerKeywordPage, { generateMetadata } from './tibiaretro-7-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro71WithReviewsServerKeywordPage />;
}
