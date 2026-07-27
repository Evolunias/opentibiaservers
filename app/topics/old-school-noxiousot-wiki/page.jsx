import OldSchoolNoxiousotWikiKeywordPage, { generateMetadata } from './old-school-noxiousot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNoxiousotWikiKeywordPage />;
}
