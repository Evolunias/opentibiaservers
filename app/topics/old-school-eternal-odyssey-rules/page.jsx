import OldSchoolEternalOdysseyRulesKeywordPage, { generateMetadata } from './old-school-eternal-odyssey-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEternalOdysseyRulesKeywordPage />;
}
