import OldSchoolMidhemWikiKeywordPage, { generateMetadata } from './old-school-midhem-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMidhemWikiKeywordPage />;
}
