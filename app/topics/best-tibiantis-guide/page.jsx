import BestTibiantisGuideKeywordPage, { generateMetadata } from './best-tibiantis-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiantisGuideKeywordPage />;
}
