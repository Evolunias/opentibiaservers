import NewOlderaDownloadKeywordPage, { generateMetadata } from './new-oldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOlderaDownloadKeywordPage />;
}
