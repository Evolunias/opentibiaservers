import OldSchoolNoxiousotDownloadKeywordPage, { generateMetadata } from './old-school-noxiousot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNoxiousotDownloadKeywordPage />;
}
