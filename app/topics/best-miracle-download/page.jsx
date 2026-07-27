import BestMiracleDownloadKeywordPage, { generateMetadata } from './best-miracle-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMiracleDownloadKeywordPage />;
}
