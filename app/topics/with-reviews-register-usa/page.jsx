import WithReviewsRegisterUsaKeywordPage, { generateMetadata } from './with-reviews-register-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRegisterUsaKeywordPage />;
}
