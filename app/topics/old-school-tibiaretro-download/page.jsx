import OldSchoolTibiaretroDownloadKeywordPage, { generateMetadata } from './old-school-tibiaretro-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaretroDownloadKeywordPage />;
}
