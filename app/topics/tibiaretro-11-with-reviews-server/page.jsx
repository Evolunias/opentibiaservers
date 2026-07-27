import Tibiaretro11WithReviewsServerKeywordPage, { generateMetadata } from './tibiaretro-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro11WithReviewsServerKeywordPage />;
}
