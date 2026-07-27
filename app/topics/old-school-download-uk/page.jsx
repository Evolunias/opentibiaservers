import OldSchoolDownloadUkKeywordPage, { generateMetadata } from './old-school-download-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDownloadUkKeywordPage />;
}
