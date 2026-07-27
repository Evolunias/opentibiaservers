import OldSchoolThorniaDownloadKeywordPage, { generateMetadata } from './old-school-thornia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThorniaDownloadKeywordPage />;
}
