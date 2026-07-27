import BestEvoleraDownloadKeywordPage, { generateMetadata } from './best-evolera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoleraDownloadKeywordPage />;
}
