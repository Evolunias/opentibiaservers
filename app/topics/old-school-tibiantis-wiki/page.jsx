import OldSchoolTibiantisWikiKeywordPage, { generateMetadata } from './old-school-tibiantis-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiantisWikiKeywordPage />;
}
