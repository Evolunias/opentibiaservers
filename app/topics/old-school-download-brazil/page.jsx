import OldSchoolDownloadBrazilKeywordPage, { generateMetadata } from './old-school-download-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDownloadBrazilKeywordPage />;
}
