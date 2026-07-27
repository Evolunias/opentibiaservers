import OldSchoolDownloadCanadaKeywordPage, { generateMetadata } from './old-school-download-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDownloadCanadaKeywordPage />;
}
