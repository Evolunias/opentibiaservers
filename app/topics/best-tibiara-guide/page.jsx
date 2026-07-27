import BestTibiaraGuideKeywordPage, { generateMetadata } from './best-tibiara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaraGuideKeywordPage />;
}
