import OldSchoolSaintsotRulesKeywordPage, { generateMetadata } from './old-school-saintsot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSaintsotRulesKeywordPage />;
}
