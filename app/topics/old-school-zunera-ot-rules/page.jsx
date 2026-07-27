import OldSchoolZuneraOtRulesKeywordPage, { generateMetadata } from './old-school-zunera-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolZuneraOtRulesKeywordPage />;
}
