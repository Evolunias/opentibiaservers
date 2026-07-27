import TopOxygenotRulesKeywordPage, { generateMetadata } from './top-oxygenot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOxygenotRulesKeywordPage />;
}
