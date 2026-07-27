import TopSerenityRulesKeywordPage, { generateMetadata } from './top-serenity-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSerenityRulesKeywordPage />;
}
