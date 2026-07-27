import OldSchoolOlderaWikiKeywordPage, { generateMetadata } from './old-school-oldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOlderaWikiKeywordPage />;
}
