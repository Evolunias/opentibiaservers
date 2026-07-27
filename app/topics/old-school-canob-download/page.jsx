import OldSchoolCanobDownloadKeywordPage, { generateMetadata } from './old-school-canob-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCanobDownloadKeywordPage />;
}
