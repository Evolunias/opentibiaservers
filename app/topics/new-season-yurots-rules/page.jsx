import NewSeasonYurotsRulesKeywordPage, { generateMetadata } from './new-season-yurots-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonYurotsRulesKeywordPage />;
}
