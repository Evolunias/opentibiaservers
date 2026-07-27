import NewElderaDownloadKeywordPage, { generateMetadata } from './new-eldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewElderaDownloadKeywordPage />;
}
