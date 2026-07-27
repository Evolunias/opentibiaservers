import NewOxygenotRulesKeywordPage, { generateMetadata } from './new-oxygenot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOxygenotRulesKeywordPage />;
}
