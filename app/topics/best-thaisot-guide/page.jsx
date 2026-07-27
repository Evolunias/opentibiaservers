import BestThaisotGuideKeywordPage, { generateMetadata } from './best-thaisot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThaisotGuideKeywordPage />;
}
