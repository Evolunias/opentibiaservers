import OldSchoolRuthlessChaosRulesKeywordPage, { generateMetadata } from './old-school-ruthless-chaos-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRuthlessChaosRulesKeywordPage />;
}
