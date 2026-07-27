import HighrateSerenityRulesKeywordPage, { generateMetadata } from './highrate-serenity-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSerenityRulesKeywordPage />;
}
