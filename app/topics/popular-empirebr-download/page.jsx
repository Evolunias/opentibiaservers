import PopularEmpirebrDownloadKeywordPage, { generateMetadata } from './popular-empirebr-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEmpirebrDownloadKeywordPage />;
}
