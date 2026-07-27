import NewSeasonAureraGlobalRulesKeywordPage, { generateMetadata } from './new-season-aurera-global-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAureraGlobalRulesKeywordPage />;
}
