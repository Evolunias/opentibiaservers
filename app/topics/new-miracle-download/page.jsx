import NewMiracleDownloadKeywordPage, { generateMetadata } from './new-miracle-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMiracleDownloadKeywordPage />;
}
