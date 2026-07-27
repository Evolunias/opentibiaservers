import WithReviewsBlazeraRegisterKeywordPage, { generateMetadata } from './with-reviews-blazera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsBlazeraRegisterKeywordPage />;
}
