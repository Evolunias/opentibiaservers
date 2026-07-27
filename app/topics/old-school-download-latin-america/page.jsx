import OldSchoolDownloadLatinAmericaKeywordPage, { generateMetadata } from './old-school-download-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDownloadLatinAmericaKeywordPage />;
}
