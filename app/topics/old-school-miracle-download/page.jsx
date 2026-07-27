import OldSchoolMiracleDownloadKeywordPage, { generateMetadata } from './old-school-miracle-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMiracleDownloadKeywordPage />;
}
