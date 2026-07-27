import WithReviewsNostaltherLoginKeywordPage, { generateMetadata } from './with-reviews-nostalther-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNostaltherLoginKeywordPage />;
}
