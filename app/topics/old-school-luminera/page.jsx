import OldSchoolLumineraKeywordPage, { generateMetadata } from './old-school-luminera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLumineraKeywordPage />;
}
