import OldSchoolBaiakIlusionGuideKeywordPage, { generateMetadata } from './old-school-baiak-ilusion-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBaiakIlusionGuideKeywordPage />;
}
