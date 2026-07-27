import NewSeasonCoxaotRulesKeywordPage, { generateMetadata } from './new-season-coxaot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCoxaotRulesKeywordPage />;
}
