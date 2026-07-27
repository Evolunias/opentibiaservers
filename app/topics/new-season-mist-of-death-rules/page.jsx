import NewSeasonMistOfDeathRulesKeywordPage, { generateMetadata } from './new-season-mist-of-death-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMistOfDeathRulesKeywordPage />;
}
