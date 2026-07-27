import WithReviewsCyntaraOpenTibiaKeywordPage, { generateMetadata } from './with-reviews-cyntara-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCyntaraOpenTibiaKeywordPage />;
}
