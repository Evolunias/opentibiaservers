import NewSeasonMarolaotRulesKeywordPage, { generateMetadata } from './new-season-marolaot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMarolaotRulesKeywordPage />;
}
