import OldSchoolCarlinotDownloadKeywordPage, { generateMetadata } from './old-school-carlinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCarlinotDownloadKeywordPage />;
}
