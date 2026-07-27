import OldSchoolMidhemDownloadKeywordPage, { generateMetadata } from './old-school-midhem-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMidhemDownloadKeywordPage />;
}
