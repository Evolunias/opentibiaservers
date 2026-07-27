import NewSeasonOlderaRulesKeywordPage, { generateMetadata } from './new-season-oldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOlderaRulesKeywordPage />;
}
