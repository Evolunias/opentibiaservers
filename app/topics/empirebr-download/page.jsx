import EmpirebrDownloadKeywordPage, { generateMetadata } from './empirebr-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrDownloadKeywordPage />;
}
