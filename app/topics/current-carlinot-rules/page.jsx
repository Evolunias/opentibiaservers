import CurrentCarlinotRulesKeywordPage, { generateMetadata } from './current-carlinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCarlinotRulesKeywordPage />;
}
