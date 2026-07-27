import OldSchoolMediviaPrivateServerKeywordPage, { generateMetadata } from './old-school-medivia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMediviaPrivateServerKeywordPage />;
}
