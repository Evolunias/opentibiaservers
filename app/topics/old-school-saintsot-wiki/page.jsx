import OldSchoolSaintsotWikiKeywordPage, { generateMetadata } from './old-school-saintsot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSaintsotWikiKeywordPage />;
}
