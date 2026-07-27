import OldSchoolThorniaWikiKeywordPage, { generateMetadata } from './old-school-thornia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThorniaWikiKeywordPage />;
}
