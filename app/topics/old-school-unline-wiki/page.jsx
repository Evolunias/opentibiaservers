import OldSchoolUnlineWikiKeywordPage, { generateMetadata } from './old-school-unline-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolUnlineWikiKeywordPage />;
}
