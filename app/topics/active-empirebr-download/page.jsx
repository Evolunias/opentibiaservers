import ActiveEmpirebrDownloadKeywordPage, { generateMetadata } from './active-empirebr-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEmpirebrDownloadKeywordPage />;
}
