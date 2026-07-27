import OldSchoolBaiakIlusionServerKeywordPage, { generateMetadata } from './old-school-baiak-ilusion-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBaiakIlusionServerKeywordPage />;
}
