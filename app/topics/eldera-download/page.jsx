import ElderaDownloadKeywordPage, { generateMetadata } from './eldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaDownloadKeywordPage />;
}
