import BestCyntaraGuideKeywordPage, { generateMetadata } from './best-cyntara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCyntaraGuideKeywordPage />;
}
