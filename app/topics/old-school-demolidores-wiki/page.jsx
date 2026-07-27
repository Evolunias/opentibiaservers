import OldSchoolDemolidoresWikiKeywordPage, { generateMetadata } from './old-school-demolidores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDemolidoresWikiKeywordPage />;
}
