import OldSchoolCanobWikiKeywordPage, { generateMetadata } from './old-school-canob-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCanobWikiKeywordPage />;
}
