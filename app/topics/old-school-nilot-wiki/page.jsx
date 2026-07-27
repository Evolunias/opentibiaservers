import OldSchoolNilotWikiKeywordPage, { generateMetadata } from './old-school-nilot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNilotWikiKeywordPage />;
}
