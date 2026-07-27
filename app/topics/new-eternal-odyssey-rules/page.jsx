import NewEternalOdysseyRulesKeywordPage, { generateMetadata } from './new-eternal-odyssey-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEternalOdysseyRulesKeywordPage />;
}
