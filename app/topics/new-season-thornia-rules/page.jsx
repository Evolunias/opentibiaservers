import NewSeasonThorniaRulesKeywordPage, { generateMetadata } from './new-season-thornia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThorniaRulesKeywordPage />;
}
