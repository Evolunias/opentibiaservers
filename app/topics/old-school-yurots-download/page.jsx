import OldSchoolYurotsDownloadKeywordPage, { generateMetadata } from './old-school-yurots-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolYurotsDownloadKeywordPage />;
}
