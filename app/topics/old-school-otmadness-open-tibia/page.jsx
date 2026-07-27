import OldSchoolOtmadnessOpenTibiaKeywordPage, { generateMetadata } from './old-school-otmadness-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtmadnessOpenTibiaKeywordPage />;
}
