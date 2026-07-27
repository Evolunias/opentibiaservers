import OldSchoolElderaDownloadKeywordPage, { generateMetadata } from './old-school-eldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolElderaDownloadKeywordPage />;
}
