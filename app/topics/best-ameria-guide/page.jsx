import BestAmeriaGuideKeywordPage, { generateMetadata } from './best-ameria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAmeriaGuideKeywordPage />;
}
