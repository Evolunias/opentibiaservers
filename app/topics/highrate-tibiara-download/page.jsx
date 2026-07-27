import HighrateTibiaraDownloadKeywordPage, { generateMetadata } from './highrate-tibiara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaraDownloadKeywordPage />;
}
