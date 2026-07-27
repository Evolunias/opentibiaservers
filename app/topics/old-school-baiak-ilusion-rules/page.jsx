import OldSchoolBaiakIlusionRulesKeywordPage, { generateMetadata } from './old-school-baiak-ilusion-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBaiakIlusionRulesKeywordPage />;
}
