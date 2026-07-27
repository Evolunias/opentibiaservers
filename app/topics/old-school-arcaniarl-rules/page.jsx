import OldSchoolArcaniarlRulesKeywordPage, { generateMetadata } from './old-school-arcaniarl-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArcaniarlRulesKeywordPage />;
}
