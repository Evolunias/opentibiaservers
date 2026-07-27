import NewSeasonTibiameRulesKeywordPage, { generateMetadata } from './new-season-tibiame-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiameRulesKeywordPage />;
}
