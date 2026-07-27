import NewSeasonEvoleraRulesKeywordPage, { generateMetadata } from './new-season-evolera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoleraRulesKeywordPage />;
}
