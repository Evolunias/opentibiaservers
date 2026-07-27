import NewCyntaraRulesKeywordPage, { generateMetadata } from './new-cyntara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCyntaraRulesKeywordPage />;
}
