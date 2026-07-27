import BestTibijkaGuideKeywordPage, { generateMetadata } from './best-tibijka-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibijkaGuideKeywordPage />;
}
