import OldSchoolShadowcoresRulesKeywordPage, { generateMetadata } from './old-school-shadowcores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolShadowcoresRulesKeywordPage />;
}
