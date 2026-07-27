import NewSeasonEmpirebrDownloadKeywordPage, { generateMetadata } from './new-season-empirebr-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEmpirebrDownloadKeywordPage />;
}
