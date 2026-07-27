import OldSchoolEvoluniaRulesKeywordPage, { generateMetadata } from './old-school-evolunia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoluniaRulesKeywordPage />;
}
