import OldSchoolNilotRulesKeywordPage, { generateMetadata } from './old-school-nilot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNilotRulesKeywordPage />;
}
