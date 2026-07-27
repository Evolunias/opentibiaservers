import OldSchoolEmpirebrRulesKeywordPage, { generateMetadata } from './old-school-empirebr-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEmpirebrRulesKeywordPage />;
}
