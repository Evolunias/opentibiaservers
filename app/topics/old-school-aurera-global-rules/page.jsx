import OldSchoolAureraGlobalRulesKeywordPage, { generateMetadata } from './old-school-aurera-global-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAureraGlobalRulesKeywordPage />;
}
