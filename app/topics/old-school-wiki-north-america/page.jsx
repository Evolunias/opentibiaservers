import OldSchoolWikiNorthAmericaKeywordPage, { generateMetadata } from './old-school-wiki-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolWikiNorthAmericaKeywordPage />;
}
