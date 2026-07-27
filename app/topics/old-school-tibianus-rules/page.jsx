import OldSchoolTibianusRulesKeywordPage, { generateMetadata } from './old-school-tibianus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibianusRulesKeywordPage />;
}
