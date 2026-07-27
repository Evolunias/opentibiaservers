import TopCyntaraRulesKeywordPage, { generateMetadata } from './top-cyntara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCyntaraRulesKeywordPage />;
}
