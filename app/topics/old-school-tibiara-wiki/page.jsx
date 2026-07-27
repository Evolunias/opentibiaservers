import OldSchoolTibiaraWikiKeywordPage, { generateMetadata } from './old-school-tibiara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaraWikiKeywordPage />;
}
