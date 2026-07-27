import OpenTibiaServersReviewsKeywordPage, { generateMetadata } from './open-tibia-servers-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersReviewsKeywordPage />;
}
