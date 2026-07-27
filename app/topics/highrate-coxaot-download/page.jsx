import HighrateCoxaotDownloadKeywordPage, { generateMetadata } from './highrate-coxaot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCoxaotDownloadKeywordPage />;
}
