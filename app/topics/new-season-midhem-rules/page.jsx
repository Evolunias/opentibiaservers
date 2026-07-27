import NewSeasonMidhemRulesKeywordPage, { generateMetadata } from './new-season-midhem-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMidhemRulesKeywordPage />;
}
