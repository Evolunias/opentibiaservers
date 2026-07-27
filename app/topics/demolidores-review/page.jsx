import DemolidoresReviewKeywordPage, { generateMetadata } from './demolidores-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresReviewKeywordPage />;
}
