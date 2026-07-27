import NewSeasonEmpirebrRulesKeywordPage, { generateMetadata } from './new-season-empirebr-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEmpirebrRulesKeywordPage />;
}
