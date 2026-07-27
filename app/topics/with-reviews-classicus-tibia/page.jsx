import WithReviewsClassicusTibiaKeywordPage, { generateMetadata } from './with-reviews-classicus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClassicusTibiaKeywordPage />;
}
