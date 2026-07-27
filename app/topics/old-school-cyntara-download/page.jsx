import OldSchoolCyntaraDownloadKeywordPage, { generateMetadata } from './old-school-cyntara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCyntaraDownloadKeywordPage />;
}
