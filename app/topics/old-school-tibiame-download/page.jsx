import OldSchoolTibiameDownloadKeywordPage, { generateMetadata } from './old-school-tibiame-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiameDownloadKeywordPage />;
}
