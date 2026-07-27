import NoResetOxygenotRulesKeywordPage, { generateMetadata } from './no-reset-oxygenot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOxygenotRulesKeywordPage />;
}
