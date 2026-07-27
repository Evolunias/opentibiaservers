import WithReviewsLumineraTibiaKeywordPage, { generateMetadata } from './with-reviews-luminera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsLumineraTibiaKeywordPage />;
}
