import OldSchoolBlazeraRulesKeywordPage, { generateMetadata } from './old-school-blazera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBlazeraRulesKeywordPage />;
}
