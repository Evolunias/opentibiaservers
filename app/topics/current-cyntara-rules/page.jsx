import CurrentCyntaraRulesKeywordPage, { generateMetadata } from './current-cyntara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCyntaraRulesKeywordPage />;
}
