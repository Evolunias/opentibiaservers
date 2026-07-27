import OldSchoolTibijkaRulesKeywordPage, { generateMetadata } from './old-school-tibijka-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibijkaRulesKeywordPage />;
}
