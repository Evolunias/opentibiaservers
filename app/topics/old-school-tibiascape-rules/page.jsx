import OldSchoolTibiascapeRulesKeywordPage, { generateMetadata } from './old-school-tibiascape-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiascapeRulesKeywordPage />;
}
