import NoxiousotReviewKeywordPage, { generateMetadata } from './noxiousot-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotReviewKeywordPage />;
}
