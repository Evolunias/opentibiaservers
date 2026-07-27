import OldSchoolHarmoniaOtWebsiteKeywordPage, { generateMetadata } from './old-school-harmonia-ot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolHarmoniaOtWebsiteKeywordPage />;
}
