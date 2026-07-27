import NostaltherReviewsKeywordPage, { generateMetadata } from './nostalther-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherReviewsKeywordPage />;
}
