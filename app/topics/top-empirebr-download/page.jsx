import TopEmpirebrDownloadKeywordPage, { generateMetadata } from './top-empirebr-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEmpirebrDownloadKeywordPage />;
}
