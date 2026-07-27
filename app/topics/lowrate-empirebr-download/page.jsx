import LowrateEmpirebrDownloadKeywordPage, { generateMetadata } from './lowrate-empirebr-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEmpirebrDownloadKeywordPage />;
}
