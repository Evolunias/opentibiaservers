import OldSchoolMiracleWikiKeywordPage, { generateMetadata } from './old-school-miracle-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMiracleWikiKeywordPage />;
}
