import OldSchoolTibijkaWikiKeywordPage, { generateMetadata } from './old-school-tibijka-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibijkaWikiKeywordPage />;
}
