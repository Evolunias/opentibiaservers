import CurrentUnlineRulesKeywordPage, { generateMetadata } from './current-unline-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentUnlineRulesKeywordPage />;
}
