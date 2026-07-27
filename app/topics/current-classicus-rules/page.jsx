import CurrentClassicusRulesKeywordPage, { generateMetadata } from './current-classicus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassicusRulesKeywordPage />;
}
