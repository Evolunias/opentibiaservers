import CurrentTibianusRulesKeywordPage, { generateMetadata } from './current-tibianus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibianusRulesKeywordPage />;
}
