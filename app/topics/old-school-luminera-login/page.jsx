import OldSchoolLumineraLoginKeywordPage, { generateMetadata } from './old-school-luminera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLumineraLoginKeywordPage />;
}
