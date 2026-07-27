import CurrentCyntaraDownloadKeywordPage, { generateMetadata } from './current-cyntara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCyntaraDownloadKeywordPage />;
}
