import Tibiaretro13WithReviewsServerKeywordPage, { generateMetadata } from './tibiaretro-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro13WithReviewsServerKeywordPage />;
}
