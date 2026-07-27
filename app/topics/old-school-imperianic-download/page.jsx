import OldSchoolImperianicDownloadKeywordPage, { generateMetadata } from './old-school-imperianic-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolImperianicDownloadKeywordPage />;
}
