import NewSeasonTibianusRulesKeywordPage, { generateMetadata } from './new-season-tibianus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibianusRulesKeywordPage />;
}
