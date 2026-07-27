import OldSchoolBaiakIlusionClientKeywordPage, { generateMetadata } from './old-school-baiak-ilusion-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBaiakIlusionClientKeywordPage />;
}
