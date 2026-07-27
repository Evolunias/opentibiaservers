import TibiaPrivateServerReviewsKeywordPage, { generateMetadata } from './tibia-private-server-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServerReviewsKeywordPage />;
}
