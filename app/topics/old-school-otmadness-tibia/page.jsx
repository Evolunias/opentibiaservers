import OldSchoolOtmadnessTibiaKeywordPage, { generateMetadata } from './old-school-otmadness-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtmadnessTibiaKeywordPage />;
}
