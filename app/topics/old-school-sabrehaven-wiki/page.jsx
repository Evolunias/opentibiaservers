import OldSchoolSabrehavenWikiKeywordPage, { generateMetadata } from './old-school-sabrehaven-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSabrehavenWikiKeywordPage />;
}
