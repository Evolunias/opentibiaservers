import NewSeasonLumineraRulesKeywordPage, { generateMetadata } from './new-season-luminera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonLumineraRulesKeywordPage />;
}
