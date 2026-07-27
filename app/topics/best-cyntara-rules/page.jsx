import BestCyntaraRulesKeywordPage, { generateMetadata } from './best-cyntara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCyntaraRulesKeywordPage />;
}
