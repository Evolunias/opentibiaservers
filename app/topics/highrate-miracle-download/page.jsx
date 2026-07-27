import HighrateMiracleDownloadKeywordPage, { generateMetadata } from './highrate-miracle-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMiracleDownloadKeywordPage />;
}
