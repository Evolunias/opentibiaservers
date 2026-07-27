import NoResetCyntaraRulesKeywordPage, { generateMetadata } from './no-reset-cyntara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCyntaraRulesKeywordPage />;
}
