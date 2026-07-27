import NewSeasonTibijkaRulesKeywordPage, { generateMetadata } from './new-season-tibijka-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibijkaRulesKeywordPage />;
}
