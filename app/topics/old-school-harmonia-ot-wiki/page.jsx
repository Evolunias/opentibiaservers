import OldSchoolHarmoniaOtWikiKeywordPage, { generateMetadata } from './old-school-harmonia-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolHarmoniaOtWikiKeywordPage />;
}
