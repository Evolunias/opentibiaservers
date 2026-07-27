import ActiveMiracleRulesKeywordPage, { generateMetadata } from './active-miracle-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMiracleRulesKeywordPage />;
}
