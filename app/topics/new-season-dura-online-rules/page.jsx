import NewSeasonDuraOnlineRulesKeywordPage, { generateMetadata } from './new-season-dura-online-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonDuraOnlineRulesKeywordPage />;
}
