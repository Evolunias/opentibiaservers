import CurrentYurotsRulesKeywordPage, { generateMetadata } from './current-yurots-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentYurotsRulesKeywordPage />;
}
