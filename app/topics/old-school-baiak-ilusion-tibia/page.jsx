import OldSchoolBaiakIlusionTibiaKeywordPage, { generateMetadata } from './old-school-baiak-ilusion-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBaiakIlusionTibiaKeywordPage />;
}
