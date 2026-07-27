import CurrentSerenityRulesKeywordPage, { generateMetadata } from './current-serenity-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSerenityRulesKeywordPage />;
}
