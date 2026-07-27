import NewSeasonMiracleRulesKeywordPage, { generateMetadata } from './new-season-miracle-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMiracleRulesKeywordPage />;
}
