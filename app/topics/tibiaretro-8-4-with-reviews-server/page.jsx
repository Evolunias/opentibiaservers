import Tibiaretro84WithReviewsServerKeywordPage, { generateMetadata } from './tibiaretro-8-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro84WithReviewsServerKeywordPage />;
}
