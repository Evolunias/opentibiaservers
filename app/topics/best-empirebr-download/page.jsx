import BestEmpirebrDownloadKeywordPage, { generateMetadata } from './best-empirebr-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEmpirebrDownloadKeywordPage />;
}
