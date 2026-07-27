import LowrateOlderaDownloadKeywordPage, { generateMetadata } from './lowrate-oldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOlderaDownloadKeywordPage />;
}
