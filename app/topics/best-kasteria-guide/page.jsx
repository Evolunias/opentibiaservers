import BestKasteriaGuideKeywordPage, { generateMetadata } from './best-kasteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestKasteriaGuideKeywordPage />;
}
