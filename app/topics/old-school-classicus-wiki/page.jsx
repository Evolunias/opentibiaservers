import OldSchoolClassicusWikiKeywordPage, { generateMetadata } from './old-school-classicus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassicusWikiKeywordPage />;
}
