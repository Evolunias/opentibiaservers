import OldSchoolAmeriaRulesKeywordPage, { generateMetadata } from './old-school-ameria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAmeriaRulesKeywordPage />;
}
