import NewSeasonCyntaraRulesKeywordPage, { generateMetadata } from './new-season-cyntara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCyntaraRulesKeywordPage />;
}
