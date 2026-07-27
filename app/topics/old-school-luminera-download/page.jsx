import OldSchoolLumineraDownloadKeywordPage, { generateMetadata } from './old-school-luminera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLumineraDownloadKeywordPage />;
}
