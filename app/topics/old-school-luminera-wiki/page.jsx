import OldSchoolLumineraWikiKeywordPage, { generateMetadata } from './old-school-luminera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLumineraWikiKeywordPage />;
}
