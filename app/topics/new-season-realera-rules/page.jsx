import NewSeasonRealeraRulesKeywordPage, { generateMetadata } from './new-season-realera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealeraRulesKeywordPage />;
}
