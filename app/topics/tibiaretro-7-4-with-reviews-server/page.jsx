import Tibiaretro74WithReviewsServerKeywordPage, { generateMetadata } from './tibiaretro-7-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro74WithReviewsServerKeywordPage />;
}
