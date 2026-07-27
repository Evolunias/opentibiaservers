import NewSeasonThaisotRulesKeywordPage, { generateMetadata } from './new-season-thaisot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThaisotRulesKeywordPage />;
}
