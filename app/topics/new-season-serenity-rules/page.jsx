import NewSeasonSerenityRulesKeywordPage, { generateMetadata } from './new-season-serenity-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSerenityRulesKeywordPage />;
}
