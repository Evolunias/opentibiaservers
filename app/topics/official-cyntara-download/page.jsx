import OfficialCyntaraDownloadKeywordPage, { generateMetadata } from './official-cyntara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCyntaraDownloadKeywordPage />;
}
