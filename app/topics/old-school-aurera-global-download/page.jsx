import OldSchoolAureraGlobalDownloadKeywordPage, { generateMetadata } from './old-school-aurera-global-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAureraGlobalDownloadKeywordPage />;
}
