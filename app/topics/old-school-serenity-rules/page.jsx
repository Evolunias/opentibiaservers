import OldSchoolSerenityRulesKeywordPage, { generateMetadata } from './old-school-serenity-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSerenityRulesKeywordPage />;
}
