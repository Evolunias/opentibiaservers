import OldSchoolSerenityDownloadKeywordPage, { generateMetadata } from './old-school-serenity-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSerenityDownloadKeywordPage />;
}
