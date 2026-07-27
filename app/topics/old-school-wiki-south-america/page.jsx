import OldSchoolWikiSouthAmericaKeywordPage, { generateMetadata } from './old-school-wiki-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolWikiSouthAmericaKeywordPage />;
}
