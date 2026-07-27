import OldSchoolSabrehavenDownloadKeywordPage, { generateMetadata } from './old-school-sabrehaven-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSabrehavenDownloadKeywordPage />;
}
