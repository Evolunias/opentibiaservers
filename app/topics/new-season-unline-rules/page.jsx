import NewSeasonUnlineRulesKeywordPage, { generateMetadata } from './new-season-unline-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonUnlineRulesKeywordPage />;
}
