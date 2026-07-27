import NewSeasonOxygenotRulesKeywordPage, { generateMetadata } from './new-season-oxygenot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOxygenotRulesKeywordPage />;
}
