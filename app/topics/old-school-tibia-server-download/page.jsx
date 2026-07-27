import OldSchoolTibiaServerDownloadKeywordPage, { generateMetadata } from './old-school-tibia-server-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServerDownloadKeywordPage />;
}
