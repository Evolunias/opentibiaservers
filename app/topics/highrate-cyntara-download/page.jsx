import HighrateCyntaraDownloadKeywordPage, { generateMetadata } from './highrate-cyntara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCyntaraDownloadKeywordPage />;
}
