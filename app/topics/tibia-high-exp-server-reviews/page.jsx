import TibiaHighExpServerReviewsKeywordPage, { generateMetadata } from './tibia-high-exp-server-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaHighExpServerReviewsKeywordPage />;
}
