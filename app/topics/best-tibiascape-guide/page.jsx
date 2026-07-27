import BestTibiascapeGuideKeywordPage, { generateMetadata } from './best-tibiascape-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiascapeGuideKeywordPage />;
}
