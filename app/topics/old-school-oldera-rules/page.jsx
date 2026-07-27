import OldSchoolOlderaRulesKeywordPage, { generateMetadata } from './old-school-oldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOlderaRulesKeywordPage />;
}
