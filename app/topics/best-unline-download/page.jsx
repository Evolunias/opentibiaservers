import BestUnlineDownloadKeywordPage, { generateMetadata } from './best-unline-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestUnlineDownloadKeywordPage />;
}
