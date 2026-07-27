import NewSeasonClassicusRulesKeywordPage, { generateMetadata } from './new-season-classicus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonClassicusRulesKeywordPage />;
}
