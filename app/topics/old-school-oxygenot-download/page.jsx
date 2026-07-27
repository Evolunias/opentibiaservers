import OldSchoolOxygenotDownloadKeywordPage, { generateMetadata } from './old-school-oxygenot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOxygenotDownloadKeywordPage />;
}
