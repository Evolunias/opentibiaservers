import OldSchoolRookgaardTalesDownloadKeywordPage, { generateMetadata } from './old-school-rookgaard-tales-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRookgaardTalesDownloadKeywordPage />;
}
