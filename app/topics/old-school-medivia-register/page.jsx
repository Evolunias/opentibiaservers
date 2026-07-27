import OldSchoolMediviaRegisterKeywordPage, { generateMetadata } from './old-school-medivia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMediviaRegisterKeywordPage />;
}
