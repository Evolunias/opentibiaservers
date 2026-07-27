import NoResetSerenityRulesKeywordPage, { generateMetadata } from './no-reset-serenity-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSerenityRulesKeywordPage />;
}
