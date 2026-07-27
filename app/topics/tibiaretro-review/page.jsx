import TibiaretroReviewKeywordPage, { generateMetadata } from './tibiaretro-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroReviewKeywordPage />;
}
