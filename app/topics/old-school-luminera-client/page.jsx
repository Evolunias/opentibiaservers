import OldSchoolLumineraClientKeywordPage, { generateMetadata } from './old-school-luminera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLumineraClientKeywordPage />;
}
