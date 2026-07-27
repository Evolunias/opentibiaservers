import OldSchoolMediviaOtsKeywordPage, { generateMetadata } from './old-school-medivia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMediviaOtsKeywordPage />;
}
