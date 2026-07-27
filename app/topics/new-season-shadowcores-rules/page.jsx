import NewSeasonShadowcoresRulesKeywordPage, { generateMetadata } from './new-season-shadowcores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonShadowcoresRulesKeywordPage />;
}
