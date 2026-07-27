import OldSchoolHarmoniaOtDownloadKeywordPage, { generateMetadata } from './old-school-harmonia-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolHarmoniaOtDownloadKeywordPage />;
}
