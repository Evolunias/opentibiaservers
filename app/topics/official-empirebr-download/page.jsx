import OfficialEmpirebrDownloadKeywordPage, { generateMetadata } from './official-empirebr-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEmpirebrDownloadKeywordPage />;
}
