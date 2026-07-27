import CustomSerenityRulesKeywordPage, { generateMetadata } from './custom-serenity-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSerenityRulesKeywordPage />;
}
