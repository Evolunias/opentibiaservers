import OldSchoolNostaltherDownloadKeywordPage, { generateMetadata } from './old-school-nostalther-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNostaltherDownloadKeywordPage />;
}
