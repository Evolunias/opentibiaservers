import ActiveSerenityRulesKeywordPage, { generateMetadata } from './active-serenity-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSerenityRulesKeywordPage />;
}
