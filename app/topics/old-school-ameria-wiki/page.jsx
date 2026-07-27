import OldSchoolAmeriaWikiKeywordPage, { generateMetadata } from './old-school-ameria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAmeriaWikiKeywordPage />;
}
