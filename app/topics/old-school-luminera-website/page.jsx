import OldSchoolLumineraWebsiteKeywordPage, { generateMetadata } from './old-school-luminera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLumineraWebsiteKeywordPage />;
}
