import OldSchoolEmpirebrDownloadKeywordPage, { generateMetadata } from './old-school-empirebr-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEmpirebrDownloadKeywordPage />;
}
