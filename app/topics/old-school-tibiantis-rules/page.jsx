import OldSchoolTibiantisRulesKeywordPage, { generateMetadata } from './old-school-tibiantis-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiantisRulesKeywordPage />;
}
