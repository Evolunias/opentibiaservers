import NewSeasonArchlightRulesKeywordPage, { generateMetadata } from './new-season-archlight-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArchlightRulesKeywordPage />;
}
