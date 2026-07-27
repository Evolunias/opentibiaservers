import NewCyntaraDownloadKeywordPage, { generateMetadata } from './new-cyntara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCyntaraDownloadKeywordPage />;
}
