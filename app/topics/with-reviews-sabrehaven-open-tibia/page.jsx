import WithReviewsSabrehavenOpenTibiaKeywordPage, { generateMetadata } from './with-reviews-sabrehaven-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSabrehavenOpenTibiaKeywordPage />;
}
