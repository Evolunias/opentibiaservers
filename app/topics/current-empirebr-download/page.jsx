import CurrentEmpirebrDownloadKeywordPage, { generateMetadata } from './current-empirebr-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEmpirebrDownloadKeywordPage />;
}
