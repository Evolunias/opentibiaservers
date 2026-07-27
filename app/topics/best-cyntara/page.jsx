import BestCyntaraKeywordPage, { generateMetadata } from './best-cyntara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCyntaraKeywordPage />;
}
