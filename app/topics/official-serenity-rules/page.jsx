import OfficialSerenityRulesKeywordPage, { generateMetadata } from './official-serenity-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSerenityRulesKeywordPage />;
}
