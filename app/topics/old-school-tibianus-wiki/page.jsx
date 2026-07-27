import OldSchoolTibianusWikiKeywordPage, { generateMetadata } from './old-school-tibianus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibianusWikiKeywordPage />;
}
