import OldSchoolMidhemRulesKeywordPage, { generateMetadata } from './old-school-midhem-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMidhemRulesKeywordPage />;
}
