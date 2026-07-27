import OldSchoolTibijkaDownloadKeywordPage, { generateMetadata } from './old-school-tibijka-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibijkaDownloadKeywordPage />;
}
