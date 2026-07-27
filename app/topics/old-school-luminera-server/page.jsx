import OldSchoolLumineraServerKeywordPage, { generateMetadata } from './old-school-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLumineraServerKeywordPage />;
}
