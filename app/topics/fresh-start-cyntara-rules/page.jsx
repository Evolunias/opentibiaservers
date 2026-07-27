import FreshStartCyntaraRulesKeywordPage, { generateMetadata } from './fresh-start-cyntara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCyntaraRulesKeywordPage />;
}
