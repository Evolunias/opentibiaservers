import Tibiaretro12WithReviewsServerKeywordPage, { generateMetadata } from './tibiaretro-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro12WithReviewsServerKeywordPage />;
}
