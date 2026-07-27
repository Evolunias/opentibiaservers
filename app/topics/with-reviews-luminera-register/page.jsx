import WithReviewsLumineraRegisterKeywordPage, { generateMetadata } from './with-reviews-luminera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsLumineraRegisterKeywordPage />;
}
