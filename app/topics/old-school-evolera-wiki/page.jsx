import OldSchoolEvoleraWikiKeywordPage, { generateMetadata } from './old-school-evolera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoleraWikiKeywordPage />;
}
