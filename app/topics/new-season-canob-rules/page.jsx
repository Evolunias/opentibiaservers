import NewSeasonCanobRulesKeywordPage, { generateMetadata } from './new-season-canob-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCanobRulesKeywordPage />;
}
