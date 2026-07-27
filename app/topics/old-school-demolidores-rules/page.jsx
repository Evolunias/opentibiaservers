import OldSchoolDemolidoresRulesKeywordPage, { generateMetadata } from './old-school-demolidores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDemolidoresRulesKeywordPage />;
}
