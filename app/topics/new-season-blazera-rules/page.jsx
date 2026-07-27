import NewSeasonBlazeraRulesKeywordPage, { generateMetadata } from './new-season-blazera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonBlazeraRulesKeywordPage />;
}
