import LowrateCyntaraDownloadKeywordPage, { generateMetadata } from './lowrate-cyntara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCyntaraDownloadKeywordPage />;
}
