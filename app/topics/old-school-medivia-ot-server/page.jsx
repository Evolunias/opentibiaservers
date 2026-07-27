import OldSchoolMediviaOtServerKeywordPage, { generateMetadata } from './old-school-medivia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMediviaOtServerKeywordPage />;
}
