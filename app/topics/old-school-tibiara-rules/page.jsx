import OldSchoolTibiaraRulesKeywordPage, { generateMetadata } from './old-school-tibiara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaraRulesKeywordPage />;
}
