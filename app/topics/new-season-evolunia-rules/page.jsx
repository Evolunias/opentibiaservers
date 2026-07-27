import NewSeasonEvoluniaRulesKeywordPage, { generateMetadata } from './new-season-evolunia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoluniaRulesKeywordPage />;
}
