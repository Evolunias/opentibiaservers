import ActiveOxygenotRulesKeywordPage, { generateMetadata } from './active-oxygenot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOxygenotRulesKeywordPage />;
}
