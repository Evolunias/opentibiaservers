import OldSchoolMediviaServerKeywordPage, { generateMetadata } from './old-school-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMediviaServerKeywordPage />;
}
