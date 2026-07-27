import HighrateOxygenotRulesKeywordPage, { generateMetadata } from './highrate-oxygenot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOxygenotRulesKeywordPage />;
}
