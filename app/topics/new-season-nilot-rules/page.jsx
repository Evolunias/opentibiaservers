import NewSeasonNilotRulesKeywordPage, { generateMetadata } from './new-season-nilot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNilotRulesKeywordPage />;
}
