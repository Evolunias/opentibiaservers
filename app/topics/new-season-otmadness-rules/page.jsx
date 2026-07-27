import NewSeasonOtmadnessRulesKeywordPage, { generateMetadata } from './new-season-otmadness-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOtmadnessRulesKeywordPage />;
}
