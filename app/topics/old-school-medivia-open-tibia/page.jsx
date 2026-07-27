import OldSchoolMediviaOpenTibiaKeywordPage, { generateMetadata } from './old-school-medivia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMediviaOpenTibiaKeywordPage />;
}
