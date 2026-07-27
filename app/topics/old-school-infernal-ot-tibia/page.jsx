import OldSchoolInfernalOtTibiaKeywordPage, { generateMetadata } from './old-school-infernal-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolInfernalOtTibiaKeywordPage />;
}
