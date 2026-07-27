import NewSeasonTibiascapeRulesKeywordPage, { generateMetadata } from './new-season-tibiascape-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiascapeRulesKeywordPage />;
}
