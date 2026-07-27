import DuraOnlineReviewKeywordPage, { generateMetadata } from './dura-online-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineReviewKeywordPage />;
}
