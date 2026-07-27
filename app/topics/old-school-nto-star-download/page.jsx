import OldSchoolNtoStarDownloadKeywordPage, { generateMetadata } from './old-school-nto-star-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNtoStarDownloadKeywordPage />;
}
