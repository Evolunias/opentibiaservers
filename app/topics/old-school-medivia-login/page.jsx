import OldSchoolMediviaLoginKeywordPage, { generateMetadata } from './old-school-medivia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMediviaLoginKeywordPage />;
}
