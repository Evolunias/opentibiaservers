import NewSeasonElderaRulesKeywordPage, { generateMetadata } from './new-season-eldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonElderaRulesKeywordPage />;
}
