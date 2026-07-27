import NewSeasonRealestaRulesKeywordPage, { generateMetadata } from './new-season-realesta-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealestaRulesKeywordPage />;
}
