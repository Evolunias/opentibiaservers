import TopMiracleDownloadKeywordPage, { generateMetadata } from './top-miracle-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMiracleDownloadKeywordPage />;
}
