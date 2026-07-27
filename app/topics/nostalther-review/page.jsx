import NostaltherReviewKeywordPage, { generateMetadata } from './nostalther-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherReviewKeywordPage />;
}
