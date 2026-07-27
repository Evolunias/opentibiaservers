import BestTibianusGuideKeywordPage, { generateMetadata } from './best-tibianus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibianusGuideKeywordPage />;
}
