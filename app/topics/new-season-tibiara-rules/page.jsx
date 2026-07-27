import NewSeasonTibiaraRulesKeywordPage, { generateMetadata } from './new-season-tibiara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaraRulesKeywordPage />;
}
