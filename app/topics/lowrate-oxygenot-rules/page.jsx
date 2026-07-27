import LowrateOxygenotRulesKeywordPage, { generateMetadata } from './lowrate-oxygenot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOxygenotRulesKeywordPage />;
}
