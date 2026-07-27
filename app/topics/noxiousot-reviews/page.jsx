import NoxiousotReviewsKeywordPage, { generateMetadata } from './noxiousot-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotReviewsKeywordPage />;
}
