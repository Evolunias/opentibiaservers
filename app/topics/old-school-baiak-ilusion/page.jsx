import OldSchoolBaiakIlusionKeywordPage, { generateMetadata } from './old-school-baiak-ilusion';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBaiakIlusionKeywordPage />;
}
