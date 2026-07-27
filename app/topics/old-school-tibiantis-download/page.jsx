import OldSchoolTibiantisDownloadKeywordPage, { generateMetadata } from './old-school-tibiantis-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiantisDownloadKeywordPage />;
}
