import Tibiaretro86WithReviewsServerKeywordPage, { generateMetadata } from './tibiaretro-8-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro86WithReviewsServerKeywordPage />;
}
