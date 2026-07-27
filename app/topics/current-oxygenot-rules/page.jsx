import CurrentOxygenotRulesKeywordPage, { generateMetadata } from './current-oxygenot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOxygenotRulesKeywordPage />;
}
