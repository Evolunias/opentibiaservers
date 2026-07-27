import OldSchoolDownloadNorthAmericaKeywordPage, { generateMetadata } from './old-school-download-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDownloadNorthAmericaKeywordPage />;
}
