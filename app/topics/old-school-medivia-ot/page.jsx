import OldSchoolMediviaOtKeywordPage, { generateMetadata } from './old-school-medivia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMediviaOtKeywordPage />;
}
