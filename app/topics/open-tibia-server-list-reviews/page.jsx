import OpenTibiaServerListReviewsKeywordPage, { generateMetadata } from './open-tibia-server-list-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerListReviewsKeywordPage />;
}
