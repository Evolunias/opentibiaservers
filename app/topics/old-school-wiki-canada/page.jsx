import OldSchoolWikiCanadaKeywordPage, { generateMetadata } from './old-school-wiki-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolWikiCanadaKeywordPage />;
}
