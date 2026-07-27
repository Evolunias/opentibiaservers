import Tibiaretro80WithReviewsServerKeywordPage, { generateMetadata } from './tibiaretro-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro80WithReviewsServerKeywordPage />;
}
