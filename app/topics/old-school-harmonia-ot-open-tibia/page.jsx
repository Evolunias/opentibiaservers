import OldSchoolHarmoniaOtOpenTibiaKeywordPage, { generateMetadata } from './old-school-harmonia-ot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolHarmoniaOtOpenTibiaKeywordPage />;
}
