import NewSeasonArcaniarlRulesKeywordPage, { generateMetadata } from './new-season-arcaniarl-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArcaniarlRulesKeywordPage />;
}
