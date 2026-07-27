import BestCyntaraDownloadKeywordPage, { generateMetadata } from './best-cyntara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCyntaraDownloadKeywordPage />;
}
