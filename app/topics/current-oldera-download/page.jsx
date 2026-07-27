import CurrentOlderaDownloadKeywordPage, { generateMetadata } from './current-oldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOlderaDownloadKeywordPage />;
}
