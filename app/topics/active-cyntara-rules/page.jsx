import ActiveCyntaraRulesKeywordPage, { generateMetadata } from './active-cyntara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCyntaraRulesKeywordPage />;
}
