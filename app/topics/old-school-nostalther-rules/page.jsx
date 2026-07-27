import OldSchoolNostaltherRulesKeywordPage, { generateMetadata } from './old-school-nostalther-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNostaltherRulesKeywordPage />;
}
